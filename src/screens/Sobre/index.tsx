import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { useTheme } from "../../context";
import Connection from "../../components/Connection";
import { styles } from "./style";
import { StackParamList } from "./types";

export default function Sobre() {
  const navigation = useNavigation<NavigationProp<StackParamList>>();
  const { colors }: any = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Image
        source={require("../../../assets/backg.png")}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Sobre o CineVerse</Text>
        <Text style={styles.paragraph}>
          O CineVerse nasceu da nossa paixão por histórias contadas através da tela.
          Nosso objetivo é conectar fãs de cinema com as melhores obras, trailers atualizados,
          recomendações personalizadas e uma comunidade que ama cinema tanto quanto você.
        </Text>

        <Text style={styles.paragraph}>
          Com um design intuitivo e funcionalidades pensadas para você, o CineVerse transforma sua
          experiência cinematográfica em algo único. Prepare a pipoca e explore o universo dos filmes
          de forma mais imersiva!
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Filmes")}
        >
          <Text style={styles.buttonText}>Explorar Filmes</Text>
        </TouchableOpacity>
      </ScrollView>

      <Connection />
    </View>
  );
}
