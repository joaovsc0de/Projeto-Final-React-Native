import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "@react-navigation/native";
import { StackParamList } from "./types";
import { useTheme } from "../../context";
import styles from "./styles";

export default function Login() {
  const navigation = useNavigation<NavigationProp<StackParamList>>();
  const scheme = useColorScheme();
  const { colors } = useTheme();

  return (
    <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
      <Image style={styles.img} source={require("../../../assets/icone.png")} />

      <View>
        <Text style={[styles.input, { color: colors.text }]}>Email:</Text>
        <TextInput
          style={[
            styles.textInput,
            {
              color: colors.text,
              backgroundColor: scheme === "dark" ? "#1e1e1e" : "#fff",
              borderColor: scheme === "dark" ? "#555" : "#ddd",
            },
          ]}
          placeholder="Digite seu email"
          placeholderTextColor={scheme === "dark" ? "#aaa" : "#666"}
        />

        <Text style={[styles.input, { color: colors.text }]}>Senha:</Text>
        <TextInput
          style={[
            styles.textInput,
            {
              color: colors.text,
              backgroundColor: scheme === "dark" ? "#1e1e1e" : "#fff",
              borderColor: scheme === "dark" ? "#555" : "#ddd",
            },
          ]}
          placeholder="Digite sua senha"
          placeholderTextColor={scheme === "dark" ? "#aaa" : "#666"}
          secureTextEntry
        />
      </View>

      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Cadastro")}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
