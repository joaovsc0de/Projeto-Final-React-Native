// src/components/CustomDrawer/ThemeToggleButton.tsx
import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "../context";

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <TouchableWithoutFeedback
      onPress={() => toggleTheme(isDark ? "light" : "dark")}
    >
      <View style={[styles.toggleContainer, isDark && styles.toggleDark]}>
        <View style={[styles.circle, isDark && styles.circleRight]}>
          <Feather
            name={isDark ? "moon" : "sun"}
            size={18}
            color={isDark ? "#fff" : "#f5c518"}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  toggleContainer: {
    width: 60,
    height: 30,
    borderRadius: 30,
    backgroundColor: "#ddd",
    justifyContent: "center",
    padding: 3,
    marginRight: 15,
  },
  toggleDark: {
    backgroundColor: "#333",
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },
  circleRight: {
    alignSelf: "flex-end",
    backgroundColor: "#111",
  },
});
