import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
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
  },
  img: {
    width: 20,
    height: 20,
  },
});

