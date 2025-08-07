import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Modal,
  ScrollView,
} from 'react-native';
import { Camera } from 'expo-camera';
import { Magnetometer } from 'expo-sensors';
import { ROOM_TYPES } from '../data/vastuZones';
import { getZoneFromAngle, calculateCompliance, getRemediesForZone } from '../utils/vastuCalculations';

export default function ScanRoomScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [heading, setHeading] = useState(0);
  const [selectedRoomType, setSelectedRoomType] = useState(null);
  const [currentZone, setCurrentZone] = useState(null);
  const [scanResult, setScanResult] = useState(null);
  const [showRoomSelector, setShowRoomSelector] = useState(true);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  useEffect(() => {
    let subscription;
    
    const startMagnetometer = async () => {
      try {
        const { status } = await Magnetometer.requestPermissionsAsync();
        if (status === 'granted') {
          Magnetometer.setUpdateInterval(100);
          subscription = Magnetometer.addListener((data) => {
            const { x, y } = data;
            let angle = Math.atan2(y, x) * (180 / Math.PI);
            angle = (angle + 360) % 360;
            setHeading(angle);
            setCurrentZone(getZoneFromAngle(angle));
          });
        }
      } catch (error) {
        console.log('Magnetometer error:', error);
      }
    };

    if (!showRoomSelector) {
      startMagnetometer();
    }

    return () => {
      if (subscription) {
        subscription.remove();
      }
    };
  }, [showRoomSelector]);

  const selectRoomType = (roomType) => {
    setSelectedRoomType(roomType);
    setShowRoomSelector(false);
  };

  const scanRoom = () => {
    if (!selectedRoomType || !currentZone) {
      Alert.alert('Error', 'Please select a room type and ensure compass is working');
      return;
    }

    const compliance = calculateCompliance(selectedRoomType.id, currentZone);
    const remedies = getRemediesForZone(currentZone.id, selectedRoomType.id);

    const result = {
      roomType: selectedRoomType,
      zone: currentZone,
      heading: Math.round(heading),
      compliance,
      remedies,
      timestamp: new Date().toLocaleString()
    };

    setScanResult(result);
    setShowResults(true);
  };

  const getComplianceColor = (status) => {
    switch (status) {
      case 'excellent': return '#4CAF50';
      case 'good': return '#FF9800';
      case 'needs_improvement': return '#F44336';
      default: return '#9E9E9E';
    }
  };

  const getComplianceText = (status) => {
    switch (status) {
      case 'excellent': return 'Excellent Placement';
      case 'good': return 'Good Placement';
      case 'needs_improvement': return 'Needs Improvement';
      default: return 'Unknown';
    }
  };

  if (hasPermission === null) {
    return <View style={styles.container}><Text>Requesting camera permission...</Text></View>;
  }
  if (hasPermission === false) {
    return <View style={styles.container}><Text>No access to camera</Text></View>;
  }

  const RoomSelectorModal = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showRoomSelector}
      onRequestClose={() => setShowRoomSelector(false)}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Select Room Type</Text>
          <Text style={styles.modalSubtitle}>Choose the type of room you want to scan</Text>
          
          <ScrollView style={styles.roomList}>
            {ROOM_TYPES.map((roomType) => (
              <TouchableOpacity
                key={roomType.id}
                style={[styles.roomOption, { borderLeftColor: roomType.color }]}
                onPress={() => selectRoomType(roomType)}
              >
                <Text style={styles.roomOptionName}>{roomType.name}</Text>
                <Text style={styles.roomOptionZones}>
                  Best in: {roomType.idealZones.join(', ')}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );

  const ResultsModal = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showResults}
      onRequestClose={() => setShowResults(false)}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          {scanResult && (
            <ScrollView>
              <Text style={styles.modalTitle}>Scan Results</Text>
              
              <View style={styles.resultSection}>
                <Text style={styles.resultLabel}>Room Type:</Text>
                <Text style={styles.resultValue}>{scanResult.roomType.name}</Text>
              </View>

              <View style={styles.resultSection}>
                <Text style={styles.resultLabel}>Current Zone:</Text>
                <Text style={styles.resultValue}>{scanResult.zone.name}</Text>
                <Text style={styles.resultSubvalue}>
                  Direction: {scanResult.heading}° | Element: {scanResult.zone.element}
                </Text>
              </View>

              <View style={styles.resultSection}>
                <Text style={styles.resultLabel}>Compliance Score:</Text>
                <View style={styles.complianceContainer}>
                  <View 
                    style={[
                      styles.complianceScore, 
                      { backgroundColor: getComplianceColor(scanResult.compliance.status) }
                    ]}
                  >
                    <Text style={styles.complianceScoreText}>
                      {scanResult.compliance.score}%
                    </Text>
                  </View>
                  <Text style={[
                    styles.complianceStatus,
                    { color: getComplianceColor(scanResult.compliance.status) }
                  ]}>
                    {getComplianceText(scanResult.compliance.status)}
                  </Text>
                </View>
              </View>

              <View style={styles.resultSection}>
                <Text style={styles.resultLabel}>Recommendations:</Text>
                {scanResult.remedies.map((remedy, index) => (
                  <Text key={index} style={styles.remedyItem}>• {remedy}</Text>
                ))}
              </View>

              <View style={styles.resultSection}>
                <Text style={styles.resultLabel}>Scanned:</Text>
                <Text style={styles.resultValue}>{scanResult.timestamp}</Text>
              </View>

              <View style={styles.modalButtons}>
                <TouchableOpacity
                  style={styles.scanAgainButton}
                  onPress={() => {
                    setShowResults(false);
                    setShowRoomSelector(true);
                    setScanResult(null);
                  }}
                >
                  <Text style={styles.scanAgainButtonText}>Scan Another Room</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setShowResults(false)}
                >
                  <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          )}
        </View>
      </View>
    </Modal>
  );

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={setCameraRef}>
        <View style={styles.overlay}>
          <View style={styles.header}>
            <Text style={styles.title}>Room Scanner</Text>
            {selectedRoomType && (
              <Text style={styles.selectedRoom}>Scanning: {selectedRoomType.name}</Text>
            )}
          </View>

          <View style={styles.compassOverlay}>
            <Text style={styles.compassText}>Direction: {Math.round(heading)}°</Text>
            {currentZone && (
              <Text style={styles.zoneText}>Zone: {currentZone.name}</Text>
            )}
          </View>

          <View style={styles.controls}>
            <TouchableOpacity
              style={styles.changeRoomButton}
              onPress={() => setShowRoomSelector(true)}
            >
              <Text style={styles.changeRoomButtonText}>Change Room Type</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.scanButton}
              onPress={scanRoom}
              disabled={!selectedRoomType || !currentZone}
            >
              <Text style={styles.scanButtonText}>📷 Scan Room</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.instructions}>
            <Text style={styles.instructionsText}>
              1. Point camera at the room{'\n'}
              2. Hold device steady{'\n'}
              3. Tap scan when ready
            </Text>
          </View>
        </View>
      </Camera>

      <RoomSelectorModal />
      <ResultsModal />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'space-between',
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 5,
  },
  selectedRoom: {
    fontSize: 16,
    color: '#FFD700',
  },
  compassOverlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    margin: 20,
    padding: 15,
    borderRadius: 10,
  },
  compassText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 5,
  },
  zoneText: {
    fontSize: 16,
    color: '#FFD700',
  },
  controls: {
    padding: 20,
    alignItems: 'center',
  },
  changeRoomButton: {
    backgroundColor: 'rgba(139, 69, 19, 0.8)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginBottom: 15,
  },
  changeRoomButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  scanButton: {
    backgroundColor: '#FFD700',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    marginBottom: 15,
  },
  scanButtonText: {
    color: '#8B4513',
    fontSize: 18,
    fontWeight: 'bold',
  },
  instructions: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  instructionsText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 14,
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
    marginBottom: 10,
  },
  modalSubtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  roomList: {
    maxHeight: 300,
  },
  roomOption: {
    backgroundColor: '#FFF8DC',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    borderLeftWidth: 4,
  },
  roomOptionName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  roomOptionZones: {
    fontSize: 12,
    color: '#666',
  },
  resultSection: {
    marginBottom: 15,
  },
  resultLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#8B4513',
    marginBottom: 5,
  },
  resultValue: {
    fontSize: 16,
    color: '#333',
    marginBottom: 3,
  },
  resultSubvalue: {
    fontSize: 12,
    color: '#666',
  },
  complianceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  complianceScore: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  complianceScoreText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  complianceStatus: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  remedyItem: {
    fontSize: 14,
    color: '#333',
    marginBottom: 3,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  scanAgainButton: {
    backgroundColor: '#8B4513',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  scanAgainButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: '#CCC',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#333',
    fontWeight: 'bold',
  },
});
