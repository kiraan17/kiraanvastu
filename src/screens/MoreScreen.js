import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default function MoreScreen({ navigation }) {
  const showPremiumAlert = () => {
    Alert.alert(
      '🌟 Premium Feature',
      'This feature is available for premium users only.\n\nUpgrade to unlock:\n• Unlimited floor plans\n• Detailed PDF reports\n• Expert consultations\n• Custom remedies',
      [
        { text: 'Maybe Later', style: 'cancel' },
        { text: 'Upgrade Now', onPress: () => {} }
      ]
    );
  };

  const MenuSection = ({ title, children }) => (
    <View style={styles.menuSection}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );

  const MenuItem = ({ icon, title, subtitle, onPress, isPremium = false }) => (
    <TouchableOpacity 
      style={styles.menuItem} 
      onPress={isPremium ? showPremiumAlert : onPress}
    >
      <View style={styles.menuItemContent}>
        <Text style={styles.menuIcon}>{icon}</Text>
        <View style={styles.menuText}>
          <Text style={styles.menuTitle}>
            {title} {isPremium && <Text style={styles.premiumBadge}>⭐</Text>}
          </Text>
          <Text style={styles.menuSubtitle}>{subtitle}</Text>
        </View>
        <Text style={styles.menuArrow}>›</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>More</Text>
        <Text style={styles.subtitle}>Settings, help, and additional features</Text>
      </View>

      <MenuSection title="Knowledge Base">
        <MenuItem
          icon="📚"
          title="16 Vastu Zones"
          subtitle="Learn about all Vastu directions and their properties"
          onPress={() => Alert.alert('Coming Soon', 'This feature will be available in the next update')}
        />
        <MenuItem
          icon="🏠"
          title="Room Placement Guide"
          subtitle="Ideal placement for different rooms in your home"
          onPress={() => Alert.alert('Coming Soon', 'This feature will be available in the next update')}
        />
        <MenuItem
          icon="🎨"
          title="Color Therapy"
          subtitle="Vastu-compliant colors for each zone"
          onPress={() => Alert.alert('Coming Soon', 'This feature will be available in the next update')}
        />
        <MenuItem
          icon="🌿"
          title="Plants & Symbols"
          subtitle="Auspicious plants and symbolic items for Vastu"
          onPress={() => Alert.alert('Coming Soon', 'This feature will be available in the next update')}
        />
      </MenuSection>

      <MenuSection title="Remedies Catalog">
        <MenuItem
          icon="🎀"
          title="Color Tapes"
          subtitle="Specific color remedies for each zone"
          onPress={() => Alert.alert('Coming Soon', 'This feature will be available in the next update')}
        />
        <MenuItem
          icon="💎"
          title="Crystals & Pyramids"
          subtitle="Healing crystals and pyramid placements"
          onPress={() => Alert.alert('Coming Soon', 'This feature will be available in the next update')}
        />
        <MenuItem
          icon="🕉️"
          title="Mantras & Objects"
          subtitle="Sacred mantras and Vastu objects"
          onPress={() => Alert.alert('Coming Soon', 'This feature will be available in the next update')}
        />
      </MenuSection>

      <MenuSection title="My Reports">
        <MenuItem
          icon="📊"
          title="Saved Reports"
          subtitle="View your previous Vastu analysis reports"
          onPress={() => Alert.alert('No Reports', 'You have no saved reports yet. Start by scanning a room or analyzing a floor plan.')}
        />
        <MenuItem
          icon="📄"
          title="Export PDF Reports"
          subtitle="Download detailed PDF reports"
          isPremium={true}
        />
        <MenuItem
          icon="📤"
          title="Share Reports"
          subtitle="Share your Vastu analysis with others"
          isPremium={true}
        />
      </MenuSection>

      <MenuSection title="Expert Services">
        <MenuItem
          icon="👨‍🏫"
          title="Book Consultation"
          subtitle="One-on-one session with verified Vastu experts"
          isPremium={true}
        />
        <MenuItem
          icon="📞"
          title="Expert Helpline"
          subtitle="24/7 support from Vastu professionals"
          isPremium={true}
        />
        <MenuItem
          icon="🎓"
          title="Vastu Courses"
          subtitle="Learn Vastu principles through guided courses"
          isPremium={true}
        />
      </MenuSection>

      <MenuSection title="Settings">
        <MenuItem
          icon="🌐"
          title="Language"
          subtitle="Change app language"
          onPress={() => Alert.alert('Language', 'Currently available in English. More languages coming soon!')}
        />
        <MenuItem
          icon="🔔"
          title="Notifications"
          subtitle="Manage app notifications and reminders"
          onPress={() => Alert.alert('Coming Soon', 'Notification settings will be available in the next update')}
        />
        <MenuItem
          icon="📏"
          title="Units"
          subtitle="Choose measurement units (Metric/Imperial)"
          onPress={() => Alert.alert('Coming Soon', 'Unit settings will be available in the next update')}
        />
        <MenuItem
          icon="🎯"
          title="Calibrate Compass"
          subtitle="Recalibrate compass for accurate readings"
          onPress={() => Alert.alert('Compass Calibration', 'Move your device in a figure-8 pattern to calibrate the compass.')}
        />
      </MenuSection>

      <MenuSection title="Premium">
        <View style={styles.premiumCard}>
          <Text style={styles.premiumTitle}>🌟 Upgrade to Premium</Text>
          <Text style={styles.premiumDescription}>
            Unlock all features and get unlimited access to Vastu tools
          </Text>
          <View style={styles.premiumFeatures}>
            <Text style={styles.premiumFeature}>✓ Unlimited floor plans</Text>
            <Text style={styles.premiumFeature}>✓ Detailed PDF reports</Text>
            <Text style={styles.premiumFeature}>✓ Expert consultations</Text>
            <Text style={styles.premiumFeature}>✓ Custom remedies</Text>
            <Text style={styles.premiumFeature}>✓ Priority support</Text>
          </View>
          <View style={styles.premiumPricing}>
            <TouchableOpacity style={styles.premiumButton}>
              <Text style={styles.premiumButtonText}>₹299/month</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.premiumButton, styles.premiumButtonAnnual]}>
              <Text style={styles.premiumButtonText}>₹999/year</Text>
              <Text style={styles.premiumSavings}>Save 72%</Text>
            </TouchableOpacity>
          </View>
        </View>
      </MenuSection>

      <MenuSection title="Support">
        <MenuItem
          icon="❓"
          title="FAQ"
          subtitle="Frequently asked questions"
          onPress={() => Alert.alert('Coming Soon', 'FAQ section will be available in the next update')}
        />
        <MenuItem
          icon="📧"
          title="Contact Support"
          subtitle="Get help from our support team"
          onPress={() => Alert.alert('Contact Support', 'Email us at support@vastu360.com or call +91-XXXX-XXXX-XX')}
        />
        <MenuItem
          icon="⭐"
          title="Rate App"
          subtitle="Rate and review Vastu360 on app store"
          onPress={() => Alert.alert('Thank You!', 'Thank you for using Vastu360! Please rate us on the app store.')}
        />
        <MenuItem
          icon="📱"
          title="Share App"
          subtitle="Share Vastu360 with friends and family"
          onPress={() => Alert.alert('Share App', 'Share Vastu360: Download the best Vastu app for your home and office!')}
        />
      </MenuSection>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Vastu360 v1.0.0</Text>
        <Text style={styles.footerText}>Made with ❤️ for harmonious living</Text>
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
  menuSection: {
    margin: 15,
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8B4513',
    marginBottom: 10,
  },
  menuItem: {
    backgroundColor: '#FFF',
    marginBottom: 2,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  menuIcon: {
    fontSize: 20,
    marginRight: 15,
    width: 25,
    textAlign: 'center',
  },
  menuText: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 3,
  },
  menuSubtitle: {
    fontSize: 12,
    color: '#666',
  },
  menuArrow: {
    fontSize: 20,
    color: '#CCC',
  },
  premiumBadge: {
    color: '#FFD700',
    fontSize: 12,
  },
  premiumCard: {
    backgroundColor: '#8B4513',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
  },
  premiumTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 10,
  },
  premiumDescription: {
    fontSize: 14,
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 15,
  },
  premiumFeatures: {
    alignSelf: 'stretch',
    marginBottom: 20,
  },
  premiumFeature: {
    fontSize: 14,
    color: '#FFF',
    marginBottom: 5,
  },
  premiumPricing: {
    flexDirection: 'row',
    gap: 10,
  },
  premiumButton: {
    backgroundColor: '#FFD700',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: 'center',
  },
  premiumButtonAnnual: {
    backgroundColor: '#FF6600',
  },
  premiumButtonText: {
    color: '#8B4513',
    fontWeight: 'bold',
    fontSize: 14,
  },
  premiumSavings: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'center',
    padding: 20,
    marginTop: 20,
  },
  footerText: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
});
