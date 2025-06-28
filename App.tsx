import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppRouter from './src/routes';
import { ThemeProvider } from './src/context/index'; 
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useTheme } from '../../context';

export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <StatusBar />
          <AppRouter />
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>  );
}
