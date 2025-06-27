import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

export default function CustomDrawer(props: any) {
  return (
    <DrawerContentScrollView >
      <View style={styles.container}>
        <Image
          source={require("../../../assets/icone.png")}
          style={{ width: 70, height: 70}}
        />
        <Text style={styles.texto}>Bem Vindo!</Text>
      </View>
      <View style={{ marginTop: 10, paddingHorizontal: 10, gap: 25 }}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  texto: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 20
  },
  drawer: {
    width: "100%",
    height: 85,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
  },
});
