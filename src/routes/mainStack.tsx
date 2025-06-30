
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import detalheFilme from '../screens/detalheFilme/detalheFilme';
import Filmes from '../screens/Filmes';

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Details" component={detalheFilme} options={{ title: 'Detalhes do Filme' }} />
    </Stack.Navigator>
  );
}
