import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useTheme } from '../../context';

export default function Home() {
  const { colors, theme } = useTheme(); 

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.text, { color: colors.text }]}>
        Os melhores filmes para você!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',     
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
  },
});
