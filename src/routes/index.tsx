import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Sobre from "../screens/Sobre";
import CustomDrawer from "../components/CustomDrawer";
import { useTheme } from "../context";
import ThemeToggleButton from "../components/Button";
import mainStack from "./mainStack";
import Login from "../screens/Login";
import Cadastro from "../screens/Cadastro";
import pesquisar from "./pesquisa";
import { useAuth } from "../context/AuthContext";

const Drawer = createDrawerNavigator();

export default function AppRouter() {
  const { theme }: any = useTheme();
  const isDark = theme === "dark";
  const { isLoggedIn, logout } = useAuth();

  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <View style={{ flex: 1 }}>
          <CustomDrawer {...props} />
          {isLoggedIn && (
            <TouchableOpacity style={styles.logoutButton} onPress={logout}>
              <Text style={styles.logoutText}>Sair</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
      screenOptions={{
        drawerStyle: {
          backgroundColor: isDark ? "#111" : "#773bf4",
          width: 300,
        },
        drawerActiveBackgroundColor: isDark ? "#333" : "#fff",
        drawerInactiveTintColor: isDark ? "#ccc" : "white",
        drawerActiveTintColor: isDark ? "#773bf4" : "#773bf4",
        headerTintColor: isDark ? "#773bf4" : "#773bf4",
        headerTitleStyle: {
          color: isDark ? "#000" : "#000",
          fontWeight: "bold",
        },
        headerRight: () => <ThemeToggleButton />,
      }}
    >
      <Drawer.Screen name="Home" component={mainStack} options={{ title: "Início" }} />
      <Drawer.Screen name="Filmes" component={pesquisar} options={{ title: "Pesquisar Filmes" }} />
      <Drawer.Screen name="Sobre nós" component={Sobre} />
      {!isLoggedIn && <Drawer.Screen name="Login" component={Login} />}
      {!isLoggedIn && <Drawer.Screen name="Cadastro" component={Cadastro} />}
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  logoutButton: {
    margin: 20,
    padding: 12,
    backgroundColor: "#e53935",
    borderRadius: 8,
    alignItems: "center",
  },
  logoutText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
