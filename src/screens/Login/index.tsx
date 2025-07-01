import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "@react-navigation/native";
import { StackParamList } from "./types";
import styles from "./styles";

export default function Login() {
  const navigation = useNavigation<NavigationProp<StackParamList>>();

  return (
    <SafeAreaView>
      <Image style={styles.img} source={require("../../../assets/icone.png")} />

      <View>
        <Text style={styles.input}>Email:</Text>
        <TextInput style={styles.textInput} placeholder="Digite seu email" />
        <Text style={styles.input}>Senha:</Text>
        <TextInput style={styles.textInput} placeholder="Digite sua senha" />
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
