import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Filmes from '../screens/Filmes';
import Sobre from '../screens/Sobre';
import CustomDrawer from '../components/CustomDrawer';
import { useTheme } from '../context';
import ThemeToggleButton from '../components/Button';
import mainStack from './mainStack'; 

const Drawer = createDrawerNavigator();

export default function AppRouter() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <Drawer.Navigator
      drawerContent={CustomDrawer}
      screenOptions={{
        drawerStyle: {
          backgroundColor: isDark ? '#111' : '#773bf4',
          width: 300,
        },
        drawerActiveBackgroundColor: isDark ? '#333' : '#fff',
        drawerInactiveTintColor: isDark ? '#ccc' : 'white',
        drawerActiveTintColor: isDark ? '#773bf4' : '#773bf4',
        headerTintColor: isDark ? '#773bf4' : '#773bf4',
        headerTitleStyle: {
          color: isDark ? '#000' : '#000',
          fontWeight: 'bold',
        },
        headerRight: () => <ThemeToggleButton />,
      }}
    >
      {/* ✅ Substitui Home por MainStack */}
      <Drawer.Screen name="Home" component={mainStack} options={{ title: 'Início' }} />
      <Drawer.Screen name="Filmes" component={Filmes} />
      <Drawer.Screen name="Sobre nós" component={Sobre} />
    </Drawer.Navigator>
  );
}
