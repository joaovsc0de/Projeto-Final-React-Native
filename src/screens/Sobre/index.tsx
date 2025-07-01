import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useTheme } from "../../context";
import Connection from "../../components/Connection";
import { styles } from "./style";

type StackParamList = {
  Filmes: undefined;
};

export default function Sobre() {
  const navigation = useNavigation<NavigationProp<StackParamList>>();
  const { colors }: any = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Image
        source={require("../../../assets/backg.png")}
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
          personalizadas — tudo para tornar sua experiência cinematográfica
          ainda mais completa. Seja bem-vindo e aproveite cada cena!
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
      <Connection />
    </View>
  );
}
