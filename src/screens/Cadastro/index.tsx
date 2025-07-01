import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { styles } from "./style";

export default function Cadastro() {
  return (
    <SafeAreaView>
      <Image style={styles.img} source={require("../../../assets/icone.png")} />
      <View style={styles.container}>
        <Text style={styles.input}>Nome:</Text>
        <TextInput style={styles.textInput} placeholder="Digite seu nome" />
        <Text style={styles.input}>Email:</Text>
        <TextInput style={styles.textInput} placeholder="Digite seu email" />
        <Text style={styles.input}>Senha:</Text>
        <TextInput style={styles.textInput} placeholder="Digite sua senha" />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
