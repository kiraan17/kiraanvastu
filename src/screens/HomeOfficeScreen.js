import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { PROFESSIONS } from '../data/professions';

export default function HomeOfficeScreen() {
  const [selectedProfession, setSelectedProfession] = useState(null);
  const [showProfessionSelector, setShowProfessionSelector] = useState(true);
  const [showGuidance, setShowGuidance] = useState(false);

  const selectProfession = (profession) => {
    setSelectedProfession(profession);
    setShowProfessionSelector(false);
    setShowGuidance(true);
  };

  const ProfessionSelectorModal = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showProfessionSelector}
      onRequestClose={() => setShowProfessionSelector(false)}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Select Your Profession</Text>
          <Text style={styles.modalSubtitle}>
            Choose your profession to get personalized workspace guidance
          </Text>
          
          <ScrollView style={styles.professionList}>
            {PROFESSIONS.map((profession) => (
              <TouchableOpacity
                key={profession.id}
                style={styles.professionOption}
                onPress={() => selectProfession(profession)}
              >
                <Text style={styles.professionName}>{profession.name}</Text>
                <Text style={styles.professionPreview}>
                  Best direction: {profession.facingDirection}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Home Office Setup</Text>
        <Text style={styles.subtitle}>
          Optimize your workspace based on your profession and Vastu principles
        </Text>
      </View>

      {selectedProfession && (
        <View style={styles.selectedProfessionCard}>
          <Text style={styles.selectedProfessionTitle}>Selected Profession</Text>
          <Text style={styles.selectedProfessionName}>{selectedProfession.name}</Text>
          <TouchableOpacity
            style={styles.changeProfessionButton}
            onPress={() => setShowProfessionSelector(true)}
          >
            <Text style={styles.changeProfessionButtonText}>Change Profession</Text>
          </TouchableOpacity>
        </View>
      )}

      {selectedProfession && (
        <>
          <View style={styles.guidanceSection}>
            <Text style={styles.sectionTitle}>🎯 Ideal Zone Placement</Text>
            <View style={styles.guidanceCard}>
              <Text style={styles.guidanceText}>
                Best zones for your workspace: {selectedProfession.idealZones.join(', ')}
              </Text>
              <Text style={styles.reasoningText}>
                {selectedProfession.reasoning}
              </Text>
            </View>
          </View>

          <View style={styles.guidanceSection}>
            <Text style={styles.sectionTitle}>🧭 Facing Direction</Text>
            <View style={styles.guidanceCard}>
              <Text style={styles.facingDirection}>{selectedProfession.facingDirection}</Text>
              <Text style={styles.guidanceText}>
                Face this direction while working for optimal results
              </Text>
            </View>
          </View>

          <View style={styles.guidanceSection}>
            <Text style={styles.sectionTitle}>🎨 Recommended Colors</Text>
            <View style={styles.colorsContainer}>
              {selectedProfession.colors.map((color, index) => (
                <View key={index} style={styles.colorCard}>
                  <View style={[styles.colorSwatch, { backgroundColor: color.toLowerCase() }]} />
                  <Text style={styles.colorName}>{color}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.guidanceSection}>
            <Text style={styles.sectionTitle}>💡 Specific Recommendations</Text>
            {selectedProfession.recommendations.map((recommendation, index) => (
              <View key={index} style={styles.recommendationCard}>
                <Text style={styles.recommendationText}>• {recommendation}</Text>
              </View>
            ))}
          </View>

          <View style={styles.guidanceSection}>
            <Text style={styles.sectionTitle}>📐 Desk Placement Guide</Text>
            <View style={styles.guidanceCard}>
              <Text style={styles.guidanceSubtitle}>Ideal Setup:</Text>
              <Text style={styles.guidanceText}>
                • Place your desk in the {selectedProfession.idealZones[0]} zone
                {'\n'}• Face {selectedProfession.facingDirection} while working
                {'\n'}• Keep your back to a solid wall for support
                {'\n'}• Ensure good lighting from the left side
                {'\n'}• Keep the workspace clutter-free and organized
              </Text>
            </View>
          </View>

          <View style={styles.guidanceSection}>
            <Text style={styles.sectionTitle}>🌿 Additional Tips</Text>
            <View style={styles.guidanceCard}>
              <Text style={styles.guidanceText}>
                • Place a small plant in the North-East corner
                {'\n'}• Use a comfortable chair with good back support
                {'\n'}• Keep a glass of water on your desk
                {'\n'}• Avoid sitting directly under a beam
                {'\n'}• Ensure proper ventilation in your workspace
              </Text>
            </View>
          </View>

          <View style={styles.premiumSection}>
            <Text style={styles.premiumTitle}>🌟 Get Personalized Consultation</Text>
            <Text style={styles.premiumText}>
              Book a one-on-one session with a Vastu expert for detailed workspace analysis
            </Text>
            <TouchableOpacity style={styles.premiumButton}>
              <Text style={styles.premiumButtonText}>Book Consultation</Text>
            </TouchableOpacity>
          </View>
        </>
      )}

      <ProfessionSelectorModal />
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
  selectedProfessionCard: {
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
    alignItems: 'center',
  },
  selectedProfessionTitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  selectedProfessionName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8B4513',
    marginBottom: 10,
  },
  changeProfessionButton: {
    backgroundColor: '#8B4513',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 15,
  },
  changeProfessionButtonText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  guidanceSection: {
    margin: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8B4513',
    marginBottom: 10,
  },
  guidanceCard: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  guidanceText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  reasoningText: {
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic',
    marginTop: 5,
  },
  facingDirection: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#8B4513',
    textAlign: 'center',
    marginBottom: 10,
  },
  colorsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  colorCard: {
    alignItems: 'center',
    marginBottom: 15,
  },
  colorSwatch: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 5,
    borderWidth: 2,
    borderColor: '#DDD',
  },
  colorName: {
    fontSize: 12,
    color: '#333',
    fontWeight: 'bold',
  },
  recommendationCard: {
    backgroundColor: '#FFF',
    padding: 12,
    marginBottom: 8,
    borderRadius: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#0066CC',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  recommendationText: {
    fontSize: 14,
    color: '#333',
  },
  guidanceSubtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8B4513',
    marginBottom: 8,
  },
  premiumSection: {
    backgroundColor: '#8B4513',
    margin: 15,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 30,
  },
  premiumTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 10,
    textAlign: 'center',
  },
  premiumText: {
    fontSize: 14,
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 15,
    lineHeight: 20,
  },
  premiumButton: {
    backgroundColor: '#FFD700',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  premiumButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#8B4513',
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
  professionList: {
    maxHeight: 400,
  },
  professionOption: {
    backgroundColor: '#FFF8DC',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#8B4513',
  },
  professionName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  professionPreview: {
    fontSize: 12,
    color: '#666',
  },
});
