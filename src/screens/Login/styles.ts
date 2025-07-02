import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  img: {
    width: 180,
    height: 180,
    marginBottom: 30,
    alignSelf: "center",
  },
  label: {
    alignSelf: "flex-start",
    fontSize: 16,
    marginBottom: 6,
    marginTop: 12,
    fontWeight: "600",
  },
  textInput: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 30,
    width: "100%",
    alignItems: "center",
    gap: 15,
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: "#651ef7",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },
  buttonSecondary: {
    backgroundColor: "#444", // para cadastro
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default styles;
