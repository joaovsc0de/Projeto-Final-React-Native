import React, { useState, useEffect } from "react";
import { StatusBar, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppRouter from "./src/routes";
import { ThemeProvider } from "./src/context/index";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Splash from "./src/screens/Splash";
import NetInfo from "@react-native-community/netinfo";
import { AuthProvider } from "./src/context/AuthContext";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 3000);
  }, []);

  return (
     <AuthProvider> 
      <ThemeProvider>
      <SafeAreaProvider>
        <StatusBar />
        {showSplash ? (
          <Splash />
        ) : (
          <NavigationContainer>
            <AppRouter />
          </NavigationContainer>
        )}
      </SafeAreaProvider>
    </ThemeProvider>
    </AuthProvider>
  );
}
