import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useTheme } from "../../context";

type StackParamList = {
  Filmes: undefined;
};

export default function Sobre() {
  const navigation = useNavigation<NavigationProp<StackParamList>>();
  const { colors } = useTheme(); // ✅ pega as cores do tema

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Image
        source={require("../../../assets/image.png")}
        style={styles.imagem}
        resizeMode="cover"
      />
      <View
        style={[
          styles.mural,
          {
            backgroundColor: colors.sectionBackground,
            borderColor: colors.border,
          },
        ]}
      >
        <Text style={[styles.texto, { color: colors.text }]}>
          Amamos cinema tanto quanto você. Nosso aplicativo foi criado para
          conectar apaixonados por filmes a um mundo de histórias incríveis.
          Aqui, você encontra informações detalhadas, avaliações e recomendações
          personalizadas — tudo para tornar sua experiência cinematográfica ainda
          mais completa. Seja bem-vindo e aproveite cada cena!
        </Text>
      </View>
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: colors.sectionBackground,
            borderColor: colors.border,
          },
        ]}
        onPress={() => navigation.navigate("Filmes")}
      >
        <Text style={[styles.textoBotao, { color: colors.text }]}>Navegar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagem: {
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  mural: {
    position: "absolute",
    borderRadius: 20,
    width: 400,
    height: 250,
    marginLeft: 6,
    marginTop: 230,
    borderWidth: 1,
    padding: 16,
    justifyContent: "center",
  },
  texto: {
    fontSize: 18,
    lineHeight: 24,
  },
  button: {
    alignSelf: "center",
    position: "absolute",
    width: 120,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 500,
    borderWidth: 1,
  },
  textoBotao: {
    fontSize: 16,
    fontWeight: "600",
  },
});
