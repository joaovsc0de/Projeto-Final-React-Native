// src/components/CustomDrawer/DarkMode.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import ThemeToggleButton from '../Button';

export default function DarkMode() {
  return (
    <View style={styles.container}>
      <ThemeToggleButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
