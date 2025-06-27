import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import Home from './src/screens/Home'
import { NavigationContainer } from '@react-navigation/native'
import AppRouter from './src/routes'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'
import Turismo from './src/screens/Filmes'

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar/>
      <AppRouter/>
    </NavigationContainer>
  )
}