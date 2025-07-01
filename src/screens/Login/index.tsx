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



import { NavigationProp, useNavigation } from "@react-navigation/native";
type StackParamList = {
  Cadastro: undefined;
};
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
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={() => navigation.navigate("Cadastro")}
          >
            Cadastrar
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  textInput: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    width: "90%",
    padding: 10,
    fontSize: 18,
    alignSelf: "center",
  },
  input: {
    borderColor: "#ddd",
    borderRadius: 5,
    width: "90%",
    padding: 10,
    fontSize: 18,
    marginTop: 10,
    alignSelf: "center",
  },
  img: {
    marginTop: 50,
    marginBottom: 40,
    width: 200,
    height: 200,
    alignSelf: "center",
  },
  button: {
    marginTop: 20,
    alignSelf: "center",
    borderWidth: 1,
    width: 190,
    height: 50,
    borderRadius: 15,
    backgroundColor: "#651ef7",
    borderColor: "#fff",
  },
  buttonText: {
    marginTop: 10,
    alignSelf: "center",
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
});
