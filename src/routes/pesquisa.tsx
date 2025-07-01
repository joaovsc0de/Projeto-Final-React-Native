// router/filmesStack.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Filmes from '../screens/Filmes';
import DetalheFilme from '../screens/detalheFilme';

export type FilmesStackParamList = {
  Filmes: undefined;
  detalheFilmes: { id: number };
};

const Stack = createNativeStackNavigator<FilmesStackParamList>();

export default function FilmesStack() {
  return (
    <Stack.Navigator initialRouteName="Filmes">
      <Stack.Screen
        name="Filmes"
        component={Filmes}
        options={{ headerShown: false  }}
      />
      <Stack.Screen
        name="detalheFilmes"
        component={DetalheFilme}
        options={{ title: 'Detalhes do Filme' }}
      />
    </Stack.Navigator>
  );
}
