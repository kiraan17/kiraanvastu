import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function PremiumBanner({ onUpgrade, style }) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>🌟 Upgrade to Premium</Text>
      <Text style={styles.description}>
        Unlock unlimited features and get expert guidance
      </Text>
      <TouchableOpacity style={styles.upgradeButton} onPress={onUpgrade}>
        <Text style={styles.upgradeButtonText}>Upgrade Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8B4513',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    margin: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 15,
  },
  upgradeButton: {
    backgroundColor: '#FFD700',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  upgradeButtonText: {
    color: '#8B4513',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
