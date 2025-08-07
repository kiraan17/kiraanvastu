import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Modal,
} from 'react-native';
import { Magnetometer } from 'expo-sensors';
import VastuCompass from '../components/VastuCompass';
import { getZoneFromAngle } from '../utils/vastuCalculations';

export default function CompassScreen() {
  const [heading, setHeading] = useState(0);
  const [currentZone, setCurrentZone] = useState(null);
  const [selectedZone, setSelectedZone] = useState(null);
  const [isLocked, setIsLocked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    let subscription;
    
    const startMagnetometer = async () => {
      try {
        const { status } = await Magnetometer.requestPermissionsAsync();
        if (status === 'granted') {
          Magnetometer.setUpdateInterval(100);
          subscription = Magnetometer.addListener((data) => {
            if (!isLocked) {
              const { x, y } = data;
              let angle = Math.atan2(y, x) * (180 / Math.PI);
              angle = (angle + 360) % 360;
              setHeading(angle);
              setCurrentZone(getZoneFromAngle(angle));
            }
          });
        } else {
          Alert.alert('Permission Required', 'Magnetometer permission is required for compass functionality');
        }
      } catch (error) {
        Alert.alert('Error', 'Failed to start magnetometer');
      }
    };

    startMagnetometer();

    return () => {
      if (subscription) {
        subscription.remove();
      }
    };
  }, [isLocked]);

  const handleZonePress = (zone) => {
    setSelectedZone(zone);
    setModalVisible(true);
  };

  const toggleLock = () => {
    setIsLocked(!isLocked);
  };

  const ZoneModal = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          {selectedZone && (
            <>
              <Text style={styles.modalTitle}>{selectedZone.name}</Text>
              <Text style={styles.modalSubtitle}>
                {selectedZone.degrees.start}° - {selectedZone.degrees.end}°
              </Text>
              
              <View style={styles.modalSection}>
                <Text style={styles.modalSectionTitle}>Element & Planet</Text>
                <Text style={styles.modalText}>
                  Element: {selectedZone.element}{'\n'}
                  Ruling Planet: {selectedZone.rulingPlanet}
                </Text>
              </View>

              <View style={styles.modalSection}>
                <Text style={styles.modalSectionTitle}>Ideal Usage</Text>
                <Text style={styles.modalText}>
                  {selectedZone.idealUsage.join(', ')}
                </Text>
              </View>

              <View style={styles.modalSection}>
                <Text style={styles.modalSectionTitle}>Do's</Text>
                {selectedZone.dosDonts.dos.map((item, index) => (
                  <Text key={index} style={styles.modalListItem}>• {item}</Text>
                ))}
              </View>

              <View style={styles.modalSection}>
                <Text style={styles.modalSectionTitle}>Don'ts</Text>
                {selectedZone.dosDonts.donts.map((item, index) => (
                  <Text key={index} style={styles.modalListItem}>• {item}</Text>
                ))}
              </View>

              <View style={styles.modalSection}>
                <Text style={styles.modalSectionTitle}>Remedies</Text>
                {selectedZone.remedies.map((item, index) => (
                  <Text key={index} style={styles.modalListItem}>• {item}</Text>
                ))}
              </View>

              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    </Modal>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Vastu Compass</Text>
        <Text style={styles.subtitle}>Tap any zone for detailed information</Text>
      </View>

      <View style={styles.compassContainer}>
        <VastuCompass heading={heading} onZonePress={handleZonePress} />
      </View>

      <View style={styles.controls}>
        <TouchableOpacity
          style={[styles.lockButton, isLocked && styles.lockButtonActive]}
          onPress={toggleLock}
        >
          <Text style={styles.lockButtonText}>
            {isLocked ? '🔒 Locked' : '🔓 Unlock'}
          </Text>
        </TouchableOpacity>
      </View>

      {currentZone && (
        <View style={styles.currentZoneCard}>
          <Text style={styles.currentZoneTitle}>Current Zone</Text>
          <Text style={styles.currentZoneName}>{currentZone.name}</Text>
          <Text style={styles.currentZoneElement}>
            Element: {currentZone.element} | Planet: {currentZone.rulingPlanet}
          </Text>
          <Text style={styles.currentZoneUsage}>
            Ideal for: {currentZone.idealUsage.join(', ')}
          </Text>
        </View>
      )}

      <View style={styles.instructions}>
        <Text style={styles.instructionsTitle}>How to Use</Text>
        <Text style={styles.instructionsText}>
          1. Hold your device flat and point it in different directions{'\n'}
          2. The red needle shows North direction{'\n'}
          3. Colored zones represent different Vastu areas{'\n'}
          4. Tap any zone to see detailed information{'\n'}
          5. Use the lock button to freeze the current direction
        </Text>
      </View>

      <ZoneModal />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8DC',
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8B4513',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  compassContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  controls: {
    alignItems: 'center',
    marginVertical: 20,
  },
  lockButton: {
    backgroundColor: '#8B4513',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  lockButtonActive: {
    backgroundColor: '#FF6600',
  },
  lockButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  currentZoneCard: {
    backgroundColor: '#FFF',
    margin: 15,
    padding: 15,
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#FFD700',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  currentZoneTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8B4513',
    marginBottom: 5,
  },
  currentZoneName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  currentZoneElement: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  currentZoneUsage: {
    fontSize: 14,
    color: '#333',
  },
  instructions: {
    margin: 15,
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  instructionsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8B4513',
    marginBottom: 10,
  },
  instructionsText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#FFF',
    margin: 20,
    borderRadius: 10,
    padding: 20,
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#8B4513',
    textAlign: 'center',
    marginBottom: 5,
  },
  modalSubtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 15,
  },
  modalSection: {
    marginBottom: 15,
  },
  modalSectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8B4513',
    marginBottom: 5,
  },
  modalText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  modalListItem: {
    fontSize: 14,
    color: '#333',
    marginBottom: 3,
  },
  closeButton: {
    backgroundColor: '#8B4513',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  closeButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
