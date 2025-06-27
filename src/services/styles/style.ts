import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  text: {
    marginTop: 25,
    marginBottom: 15,
    fontSize: 25,
    fontWeight: "bold",
    color:"#651ef7"
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    width: "90%",
    padding: 10,
    fontSize: 18,
  },
  areaBtn: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 15,
    justifyContent: "center",
    gap:10
  },
  botao: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
  },
  botaoText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  resultado: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    fontSize: 22,
  },
  card: {
  flexDirection: "row",
  backgroundColor: "#fff",
  marginHorizontal: 10,
  marginVertical: 5,
  borderRadius: 10,
  elevation: 3,
  padding: 10,
},
poster: {
  width: 100,
  height: 150,
  borderRadius: 8,
},
cardTitle: {
  fontSize: 16,
  fontWeight: "bold",
},
cardSubtitle: {
  fontSize: 14,
  color: "#555",
  marginTop: 4,
},
cardOverview: {
  fontSize: 12,
  color: "#333",
  marginTop: 8,
}
});

