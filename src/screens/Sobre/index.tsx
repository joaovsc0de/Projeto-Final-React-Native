import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import Filmes from "../Filmes";

type StackParamList = {
  Filmes: undefined;
};

export default function Sobre() {
  const navigation = useNavigation<NavigationProp<StackParamList>>();
  return (
    <View>
      <Image
        source={require("../../../assets/image.png")}
        style={styles.imagem}
      />
      <View style={styles.mural}>
        <Text style={styles.texto}>
          Amamos cinema tanto quanto você. Nosso aplicativo foi criado para
          conectar apaixonados por filmes a um mundo de histórias incríveis.
          Aqui, você encontra informações detalhadas, avaliações e recomendações
          personalizadas tudo para tornar sua experiência cinematográfica ainda
          mais completa. Seja bem-vindo e aproveite cada cena!
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Filmes")}
      >
        <Text style={styles.textoBotao}>Navegar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  texto: {
    fontSize: 20,
    color: "#651ef7",
    margin: 10,
  },
  container: {
    flex: 1,
    experimental_backgroundImage: "../../../assets/image.png",
  },
  imagem: {
    height: "100%",
  },
  mural: {
    position: "absolute",
    backgroundColor: "rgba(240, 235, 235, 0.9)",
    borderRadius: 20,
    width: 400,
    height: 250,
    marginLeft: 6,
    marginTop: 230,
    opacity: 100,
    borderColor: "#651ef7",
    borderWidth: 1,
  },
  button: {
    alignSelf: "center",
    position: "absolute",
    width: 100,
    height: 30,
    backgroundColor: "rgba(240, 235, 235, 0.9)",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 500,
    borderColor: "#651ef7",
    borderWidth: 1,
  },
  textoBotao: {
    alignSelf: "center",
    color: "#651ef7",
  },
});
