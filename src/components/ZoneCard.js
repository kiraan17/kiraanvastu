import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ZoneCard({ zone, onPress, style }) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <View style={[styles.colorBar, { backgroundColor: zone.color }]} />
      <View style={styles.content}>
        <Text style={styles.zoneName}>{zone.name}</Text>
        <Text style={styles.zoneId}>({zone.id})</Text>
        <Text style={styles.zoneElement}>
          Element: {zone.element}
        </Text>
        <Text style={styles.zonePlanet}>
          Planet: {zone.rulingPlanet}
        </Text>
        <Text style={styles.zoneUsage}>
          Ideal for: {zone.idealUsage.slice(0, 2).join(', ')}
          {zone.idealUsage.length > 2 && '...'}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  colorBar: {
    height: 4,
    width: '100%',
  },
  content: {
    padding: 15,
  },
  zoneName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 3,
  },
  zoneId: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  zoneElement: {
    fontSize: 12,
    color: '#8B4513',
    marginBottom: 3,
  },
  zonePlanet: {
    fontSize: 12,
    color: '#8B4513',
    marginBottom: 5,
  },
  zoneUsage: {
    fontSize: 12,
    color: '#333',
    lineHeight: 16,
  },
});
