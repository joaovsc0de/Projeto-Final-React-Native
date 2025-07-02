import React from "react";
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
} from "react-native";
import { useTheme } from "../../context";
import { styles } from "./style";

export default function Cadastro() {
  const scheme = useColorScheme();
  const { colors } = useTheme();

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

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
