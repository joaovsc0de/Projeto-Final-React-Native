import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
  useColorScheme,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../../context";
import { styles } from "./style";

export default function Cadastro() {
  const scheme = useColorScheme();
  const { colors } = useTheme();
  const navigation = useNavigation();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleCadastro = async () => {
    if (!nome || !email || !senha) {
      Alert.alert("Preencha todos os campos.");
      return;
    }

     try {
const response = await fetch("http://192.168.1.13:8080/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, senha }),
      });

      if (response.ok) {
        Alert.alert("Cadastro feito com sucesso");
        setNome("");
        setEmail("");
        setSenha("");
        navigation.navigate("Login");
      } else {
        Alert.alert("Cadastro não realizado", "Tente novamente.");
      }
    } catch (error) {
      Alert.alert("Cadastro não realizado", "Tente novamente.");
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: colors.background }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center", paddingBottom: 40 }}
        keyboardShouldPersistTaps="handled"
      >
        <SafeAreaView>
          <Image
            style={styles.img}
            source={require("../../../assets/icone.png")}
          />

          <View style={styles.container}>
            <Text style={[styles.input, { color: colors.text }]}>Nome:</Text>
            <TextInput
              style={[
                styles.textInput,
                {
                  color: colors.text,
                  backgroundColor: scheme === "dark" ? "#1e1e1e" : "#fff",
                  borderColor: scheme === "dark" ? "#555" : "#ddd",
                },
              ]}
              placeholder="Digite seu nome"
              placeholderTextColor={scheme === "dark" ? "#aaa" : "#666"}
              value={nome}
              onChangeText={setNome}
            />

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
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
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
              value={senha}
              onChangeText={setSenha}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleCadastro}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
