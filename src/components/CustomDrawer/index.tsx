import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { useAuth } from "../../context/AuthContext";
import { style } from "./style";


export default function CustomDrawer(props: any) {
  const { user } = useAuth();

  const nome =
    user?.name ||
    user?.username ||
    user?.email?.split("@")[0] ||
    user?.sub?.split("@")[0] ||
    "Usuário";

  return (
    <DrawerContentScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <Image
          source={require("../../../assets/icone.png")}
          style={styles.image}
        />
        <Text style={styles.texto}>{`Bem-vindo(a), ${nome}`}</Text>
      </View>
      <View style={styles.drawerList}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  image: {
    width: 70,
    height: 70,
  },
  texto: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    width: "100%",
  },
  drawerList: {
    marginTop: 10,
    paddingHorizontal: 10,
    gap: 25,
  },
});
