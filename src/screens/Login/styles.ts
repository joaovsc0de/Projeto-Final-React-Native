import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
 
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

export default styles;
