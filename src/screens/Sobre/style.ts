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
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1,
  },
  mural: {
    position: "absolute",
    borderRadius: 10,
    width: 380,
    height: 280,
    marginLeft: 6,
    marginTop: 200,
    borderWidth: 2,
    padding: 18,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },
  texto: {
    fontSize: 18,
    lineHeight: 24,
    textAlign: "center",
  },
  button: {
    alignSelf: "center",
    position: "absolute",
    width: 120,
    height: 50,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 500,
    borderWidth: 1,
    zIndex: 2,
  },
  textoBotao: {
    fontSize: 16,
    fontWeight: "600",
  },
});
