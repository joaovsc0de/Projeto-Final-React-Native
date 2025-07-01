import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagem: {
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  mural: {
    position: "absolute",
    borderRadius: 20,
    width: 400,
    height: 250,
    marginLeft: 6,
    marginTop: 230,
    borderWidth: 1,
    padding: 16,
    justifyContent: "center",
  },
  texto: {
    fontSize: 18,
    lineHeight: 24,
  },
  button: {
    alignSelf: "center",
    position: "absolute",
    width: 120,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 500,
    borderWidth: 1,
  },
  textoBotao: {
    fontSize: 16,
    fontWeight: "600",
  },
});
