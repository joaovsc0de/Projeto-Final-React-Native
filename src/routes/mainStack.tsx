import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import detalheFilme from "../screens/detalheFilme";
import Filmes from "../screens/Filmes";
import Splash from "../screens/Splash";
import Login from "../screens/Login";

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={detalheFilme}
        options={{ title: "Detalhes do Filme" }}
      />
    </Stack.Navigator>
  );
}
