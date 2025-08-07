import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import CompassScreen from './src/screens/CompassScreen';
import FloorPlanScreen from './src/screens/FloorPlanScreen';
import ScanRoomScreen from './src/screens/ScanRoomScreen';
import HomeOfficeScreen from './src/screens/HomeOfficeScreen';
import MoreScreen from './src/screens/MoreScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#8B4513',
          tabBarInactiveTintColor: '#666',
          headerStyle: {
            backgroundColor: '#FFF8DC',
          },
          headerTintColor: '#8B4513',
          tabBarStyle: {
            backgroundColor: '#FFF8DC',
          },
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Text style={{ color, fontSize: size }}>🏠</Text>
            ),
          }}
        />
        <Tab.Screen 
          name="Compass" 
          component={CompassScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Text style={{ color, fontSize: size }}>🧭</Text>
            ),
          }}
        />
        <Tab.Screen 
          name="Floor Plan" 
          component={FloorPlanScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Text style={{ color, fontSize: size }}>🗺️</Text>
            ),
          }}
        />
        <Tab.Screen 
          name="Scan Room" 
          component={ScanRoomScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Text style={{ color, fontSize: size }}>📷</Text>
            ),
          }}
        />
        <Tab.Screen 
          name="Home Office" 
          component={HomeOfficeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Text style={{ color, fontSize: size }}>💼</Text>
            ),
          }}
        />
        <Tab.Screen 
          name="More" 
          component={MoreScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Text style={{ color, fontSize: size }}>☰</Text>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
