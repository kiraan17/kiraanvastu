import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function RemedyCard({ remedy, onPress, style }) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <View style={styles.content}>
        <Text style={styles.remedyText}>{remedy}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#FFD700',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 8,
  },
  content: {
    padding: 12,
  },
  remedyText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 18,
  },
});
