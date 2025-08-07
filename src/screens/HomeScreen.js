import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { VASTU_TIPS } from '../data/vastuZones';
import { getBeneficialDirection, getDailyTip } from '../utils/vastuCalculations';

const { width } = Dimensions.get('window');

export default function HomeScreen({ navigation }) {
  const [dailyTip, setDailyTip] = useState('');
  const [beneficialDirection, setBeneficialDirection] = useState('');

  useEffect(() => {
    setDailyTip(getDailyTip(VASTU_TIPS));
    setBeneficialDirection(getBeneficialDirection());
  }, []);

  const QuickActionCard = ({ title, description, icon, onPress, color }) => (
    <TouchableOpacity style={[styles.actionCard, { borderLeftColor: color }]} onPress={onPress}>
      <View style={styles.cardContent}>
        <Text style={styles.cardIcon}>{icon}</Text>
        <View style={styles.cardText}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardDescription}>{description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome to Vastu360</Text>
        <Text style={styles.subtitle}>Harmonize your space with ancient wisdom</Text>
      </View>

      <View style={styles.tipCard}>
        <Text style={styles.tipHeader}>💡 Vastu Tip of the Day</Text>
        <Text style={styles.tipText}>{dailyTip}</Text>
      </View>

      <View style={styles.directionCard}>
        <Text style={styles.directionHeader}>🧭 Today's Beneficial Direction</Text>
        <Text style={styles.directionText}>{beneficialDirection}</Text>
        <Text style={styles.directionSubtext}>Focus your important activities towards this direction</Text>
      </View>

      <View style={styles.quickActions}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        
        <QuickActionCard
          title="Check Compass"
          description="Find your Vastu directions instantly"
          icon="🧭"
          color="#8B4513"
          onPress={() => navigation.navigate('Compass')}
        />
        
        <QuickActionCard
          title="Scan Room"
          description="Analyze any room with your camera"
          icon="📷"
          color="#FF6600"
          onPress={() => navigation.navigate('Scan Room')}
        />
        
        <QuickActionCard
          title="Floor Plan Analysis"
          description="Upload and analyze your floor plan"
          icon="🗺️"
          color="#0066CC"
          onPress={() => navigation.navigate('Floor Plan')}
        />
        
        <QuickActionCard
          title="Home Office Setup"
          description="Optimize your workspace"
          icon="💼"
          color="#990033"
          onPress={() => navigation.navigate('Home Office')}
        />
      </View>

      <View style={styles.recentActivity}>
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        <View style={styles.activityItem}>
          <Text style={styles.activityIcon}>📊</Text>
          <View style={styles.activityText}>
            <Text style={styles.activityTitle}>No recent scans</Text>
            <Text style={styles.activityDescription}>Start by scanning a room or checking your compass</Text>
          </View>
        </View>
      </View>

      <View style={styles.premiumCard}>
        <Text style={styles.premiumHeader}>🌟 Unlock Premium Features</Text>
        <Text style={styles.premiumText}>
          • Unlimited floor plans{'\n'}
          • Detailed PDF reports{'\n'}
          • Expert consultations{'\n'}
          • Custom remedies
        </Text>
        <TouchableOpacity style={styles.premiumButton}>
          <Text style={styles.premiumButtonText}>Upgrade Now</Text>
        </TouchableOpacity>
      </View>
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
    backgroundColor: '#8B4513',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#FFF8DC',
    textAlign: 'center',
  },
  tipCard: {
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
  tipHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8B4513',
    marginBottom: 8,
  },
  tipText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  directionCard: {
    backgroundColor: '#FFF',
    margin: 15,
    padding: 15,
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#0066CC',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
  },
  directionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8B4513',
    marginBottom: 8,
  },
  directionText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0066CC',
    marginBottom: 5,
  },
  directionSubtext: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  quickActions: {
    margin: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8B4513',
    marginBottom: 15,
  },
  actionCard: {
    backgroundColor: '#FFF',
    marginBottom: 10,
    borderRadius: 10,
    borderLeftWidth: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardContent: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
  },
  cardIcon: {
    fontSize: 24,
    marginRight: 15,
  },
  cardText: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 3,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
  },
  recentActivity: {
    margin: 15,
  },
  activityItem: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  activityIcon: {
    fontSize: 20,
    marginRight: 15,
  },
  activityText: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 3,
  },
  activityDescription: {
    fontSize: 12,
    color: '#666',
  },
  premiumCard: {
    backgroundColor: '#8B4513',
    margin: 15,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 30,
  },
  premiumHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 10,
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
});
