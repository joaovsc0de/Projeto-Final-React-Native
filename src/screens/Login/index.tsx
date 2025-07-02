import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
  useColorScheme,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "@react-navigation/native";
import { StackParamList } from "./types";
import { useTheme } from "../../context";
import { useAuth } from "../../context/AuthContext";
import styles from "./styles";

export default function Login() {
  const navigation = useNavigation<NavigationProp<StackParamList>>();
  const scheme = useColorScheme();
  const { colors } = useTheme();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert("Preencha todos os campos.");
      return;
    }

    try {
      const response = await fetch("http://192.168.1.13:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: email,
          password: senha,
        }),
      });

      if (response.ok) {
        const token = response.headers.get("Authorization");
        console.log("Token recebido:", token);

        if (token) {
          await login(token); // usa o contexto para salvar e atualizar estado
          Alert.alert("Login realizado com sucesso");
          navigation.reset({
            index: 0,
            routes: [{ name: "Home" }],
          });
        } else {
          Alert.alert("Login não realizado", "Tente novamente.");
        }
      } else {
        Alert.alert("Login não realizado", "Tente novamente.");
      }
    } catch (error) {
      Alert.alert("Erro ao conectar", "Verifique sua conexão e tente novamente.");
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: colors.background }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <Image
          style={styles.img}
          source={require("../../../assets/icone.png")}
        />

        <Text style={[styles.label, { color: colors.text }]}>Email</Text>
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

        <Text style={[styles.label, { color: colors.text }]}>Senha</Text>
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

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.buttonSecondary]}
            onPress={() => navigation.navigate("Cadastro")}
          >
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
