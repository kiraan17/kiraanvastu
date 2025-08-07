import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Image,
  Dimensions,
} from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { ROOM_TYPES } from '../data/vastuZones';

const { width } = Dimensions.get('window');

export default function FloorPlanScreen() {
  const [floorPlan, setFloorPlan] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [showPremiumAlert, setShowPremiumAlert] = useState(false);

  const pickFloorPlan = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ['image/*', 'application/pdf'],
        copyToCacheDirectory: true,
      });

      if (!result.canceled && result.assets[0]) {
        setFloorPlan(result.assets[0]);
        Alert.alert('Success', 'Floor plan uploaded successfully!');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to pick floor plan');
    }
  };

  const addRoom = (roomType) => {
    const newRoom = {
      id: Date.now().toString(),
      type: roomType.id,
      name: roomType.name,
      zone: null,
      compliance: 'pending'
    };
    setRooms([...rooms, newRoom]);
  };

  const generateReport = () => {
    if (rooms.length === 0) {
      Alert.alert('No Rooms', 'Please add rooms to your floor plan first');
      return;
    }
    setShowPremiumAlert(true);
  };

  const PremiumAlert = () => (
    showPremiumAlert && (
      <View style={styles.premiumOverlay}>
        <View style={styles.premiumModal}>
          <Text style={styles.premiumTitle}>🌟 Premium Feature</Text>
          <Text style={styles.premiumText}>
            PDF report generation is available for premium users only.
            Upgrade to unlock:
          </Text>
          <Text style={styles.premiumFeatures}>
            • Unlimited floor plans{'\n'}
            • Detailed PDF reports{'\n'}
            • Professional analysis{'\n'}
            • Custom recommendations
          </Text>
          <View style={styles.premiumButtons}>
            <TouchableOpacity
              style={styles.upgradeButton}
              onPress={() => setShowPremiumAlert(false)}
            >
              <Text style={styles.upgradeButtonText}>Upgrade Now</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setShowPremiumAlert(false)}
            >
              <Text style={styles.cancelButtonText}>Maybe Later</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Floor Plan Analysis</Text>
        <Text style={styles.subtitle}>Upload your floor plan and analyze Vastu compliance</Text>
      </View>

      <View style={styles.uploadSection}>
        <TouchableOpacity style={styles.uploadButton} onPress={pickFloorPlan}>
          <Text style={styles.uploadIcon}>📁</Text>
          <Text style={styles.uploadText}>
            {floorPlan ? 'Change Floor Plan' : 'Upload Floor Plan'}
          </Text>
          <Text style={styles.uploadSubtext}>
            Supports JPG, PNG, PDF formats
          </Text>
        </TouchableOpacity>

        {floorPlan && (
          <View style={styles.floorPlanPreview}>
            <Text style={styles.previewTitle}>Uploaded Floor Plan</Text>
            {floorPlan.mimeType?.startsWith('image/') ? (
              <Image source={{ uri: floorPlan.uri }} style={styles.previewImage} />
            ) : (
              <View style={styles.pdfPreview}>
                <Text style={styles.pdfIcon}>📄</Text>
                <Text style={styles.pdfName}>{floorPlan.name}</Text>
              </View>
            )}
          </View>
        )}
      </View>

      <View style={styles.roomsSection}>
        <Text style={styles.sectionTitle}>Add Rooms</Text>
        <Text style={styles.sectionSubtitle}>
          Select room types to add to your floor plan
        </Text>
        
        <View style={styles.roomGrid}>
          {ROOM_TYPES.map((roomType) => (
            <TouchableOpacity
              key={roomType.id}
              style={[styles.roomCard, { borderLeftColor: roomType.color }]}
              onPress={() => addRoom(roomType)}
            >
              <Text style={styles.roomName}>{roomType.name}</Text>
              <Text style={styles.roomZones}>
                Best in: {roomType.idealZones.join(', ')}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {rooms.length > 0 && (
        <View style={styles.addedRoomsSection}>
          <Text style={styles.sectionTitle}>Added Rooms ({rooms.length})</Text>
          {rooms.map((room) => (
            <View key={room.id} style={styles.addedRoomCard}>
              <Text style={styles.addedRoomName}>{room.name}</Text>
              <Text style={styles.addedRoomStatus}>
                Zone: {room.zone || 'Not assigned'}
              </Text>
              <View style={styles.complianceIndicator}>
                <Text style={styles.complianceText}>
                  Status: {room.compliance === 'pending' ? 'Pending Analysis' : room.compliance}
                </Text>
              </View>
            </View>
          ))}
        </View>
      )}

      <View style={styles.analysisSection}>
        <Text style={styles.sectionTitle}>Analysis Tools</Text>
        
        <TouchableOpacity style={styles.analysisButton}>
          <Text style={styles.analysisButtonText}>🧭 Overlay Vastu Chakra</Text>
          <Text style={styles.analysisButtonSubtext}>
            Position the MahaVastu Chakra on your floor plan
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.analysisButton}>
          <Text style={styles.analysisButtonText}>🎯 Set Center Point</Text>
          <Text style={styles.analysisButtonSubtext}>
            Mark the center of your property
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.analysisButton}>
          <Text style={styles.analysisButtonText}>📐 Assign Room Zones</Text>
          <Text style={styles.analysisButtonSubtext}>
            Map rooms to their corresponding Vastu zones
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.reportSection}>
        <TouchableOpacity style={styles.reportButton} onPress={generateReport}>
          <Text style={styles.reportButtonText}>📊 Generate Detailed Report</Text>
        </TouchableOpacity>
        <Text style={styles.reportNote}>
          Premium feature - Get comprehensive Vastu analysis
        </Text>
      </View>

      <View style={styles.freeFeatures}>
        <Text style={styles.freeTitle}>Free Plan Limitations</Text>
        <Text style={styles.freeText}>
          • 1 floor plan upload{'\n'}
          • Basic zone identification{'\n'}
          • Simple recommendations{'\n'}
          • No PDF export
        </Text>
        <Text style={styles.upgradePrompt}>
          Upgrade to Premium for unlimited floor plans and detailed reports!
        </Text>
      </View>

      <PremiumAlert />
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
  uploadSection: {
    margin: 15,
  },
  uploadButton: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#8B4513',
    borderStyle: 'dashed',
  },
  uploadIcon: {
    fontSize: 40,
    marginBottom: 10,
  },
  uploadText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8B4513',
    marginBottom: 5,
  },
  uploadSubtext: {
    fontSize: 12,
    color: '#666',
  },
  floorPlanPreview: {
    backgroundColor: '#FFF',
    marginTop: 15,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  previewTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8B4513',
    marginBottom: 10,
  },
  previewImage: {
    width: '100%',
    height: 200,
    borderRadius: 5,
    resizeMode: 'contain',
  },
  pdfPreview: {
    alignItems: 'center',
    padding: 20,
  },
  pdfIcon: {
    fontSize: 40,
    marginBottom: 10,
  },
  pdfName: {
    fontSize: 14,
    color: '#333',
  },
  roomsSection: {
    margin: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8B4513',
    marginBottom: 5,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  roomGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  roomCard: {
    backgroundColor: '#FFF',
    width: '48%',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    borderLeftWidth: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  roomName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  roomZones: {
    fontSize: 12,
    color: '#666',
  },
  addedRoomsSection: {
    margin: 15,
  },
  addedRoomCard: {
    backgroundColor: '#FFF',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#FFD700',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  addedRoomName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  addedRoomStatus: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  complianceIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  complianceText: {
    fontSize: 12,
    color: '#8B4513',
  },
  analysisSection: {
    margin: 15,
  },
  analysisButton: {
    backgroundColor: '#FFF',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#0066CC',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  analysisButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  analysisButtonSubtext: {
    fontSize: 12,
    color: '#666',
  },
  reportSection: {
    margin: 15,
    alignItems: 'center',
  },
  reportButton: {
    backgroundColor: '#8B4513',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    marginBottom: 10,
  },
  reportButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  reportNote: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  freeFeatures: {
    margin: 15,
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#FF6600',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  freeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8B4513',
    marginBottom: 10,
  },
  freeText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
    marginBottom: 10,
  },
  upgradePrompt: {
    fontSize: 12,
    color: '#FF6600',
    fontWeight: 'bold',
  },
  premiumOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  premiumModal: {
    backgroundColor: '#FFF',
    margin: 20,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  premiumTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#8B4513',
    marginBottom: 10,
  },
  premiumText: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  premiumFeatures: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
    marginBottom: 20,
  },
  premiumButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  upgradeButton: {
    backgroundColor: '#8B4513',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  upgradeButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#CCC',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  cancelButtonText: {
    color: '#333',
    fontWeight: 'bold',
  },
});
