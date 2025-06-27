import React from 'react'
import Home from '../screens/Home'
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../components/CustomDrawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Filmes from '../screens/Filmes';
import Sobre from '../screens/Sobre';

const Drawer = createDrawerNavigator();
export default function AppRouter() {
  return (
    <Drawer.Navigator
    drawerContent={CustomDrawer}
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#773bf4",
          width:300,
        },
        drawerActiveBackgroundColor: "#fff",
        // drawerInactiveBackgroundColor: "#23a8f2",
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#773bf4",   
        headerTintColor: '#773bf4'    
      }}
    >
      <Drawer.Screen name="Home" component={Home}
      options={{title: "Início"}} />
      <Drawer.Screen name="Filmes" component={Filmes} />
      <Drawer.Screen name="Sobre nós" component={Sobre} />
    </Drawer.Navigator>
  )
}