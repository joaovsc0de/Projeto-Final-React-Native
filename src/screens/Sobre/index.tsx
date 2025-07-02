import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
} from "react-native";
import React from "react";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { useTheme } from "../../context";
import { styles } from "./style";
import { StackParamList } from "./types";

const team = [
  {
    name: "Raílla Duarte",
    github: "duarterailla",
  },
  {
    name: "João Vitor Carneiro",
    github: "joaovsc0de",
  },
  {
    name: "Matheus Ruella",
    github: "matheusruella",
  },
  {
    name: "Jhonatan Martins",
    github: "JHONATAN-MARTIN",
  },
  {
    name: "Juliana",
    github: "JUOMATSU",
  },
];

export default function Sobre() {
  const navigation = useNavigation<NavigationProp<StackParamList>>();
  const { colors }: any = useTheme();

  const openGitHub = (username: string) => {
    Linking.openURL(`https://github.com/${username}`);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Image
        source={require("../../../assets/fundo.png")}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={[styles.title, {color: "#651ef7" }] }>CineVerse</Text>
       <Text style={styles.paragraph}>
  O CineVerse nasceu da nossa paixão por histórias contadas através da tela.{"\n\n"}
  Nosso objetivo é conectar fãs de cinema com as melhores obras, trailers atualizados,
  recomendações personalizadas e uma comunidade que ama cinema tanto quanto você.{"\n\n"}
  Com um design intuitivo e funcionalidades pensadas para você, o CineVerse transforma sua
  experiência cinematográfica em algo único. Prepare a pipoca e explore o universo dos filmes
  de forma mais imersiva!
</Text>

    <Text style={[styles.title, { marginTop: 20, color: "#651ef7" }]}>Nosso Time</Text>
        {team.map((person, index) => (
          <TouchableOpacity
            key={index}
            style={styles.profileButton}
            onPress={() => openGitHub(person.github)}
          >
            <Image
              source={{ uri: `https://github.com/${person.github}.png` }}
              style={styles.avatar}
            />
            <Text style={[styles.profileName, { color: colors.text }]}>
              {person.name}
            </Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Filmes")}
        >
          <Text style={styles.buttonText}>Explorar Filmes</Text>
        </TouchableOpacity>
      </ScrollView>

    </View>
  );
}
