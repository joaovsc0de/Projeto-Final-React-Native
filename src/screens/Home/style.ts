import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    marginTop: 50,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: { fontSize: 22, fontWeight: "700" },
  loader: { flex: 1, justifyContent: "center", alignItems: "center" },
  errorText: { textAlign: "center", marginTop: 20 },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 20,
    marginLeft: 16,
    marginBottom: 10,
  },
  flatList: { paddingHorizontal: 8 },
  card: {
    width: 120,
    height: 180,
    marginRight: 12,
    borderRadius: 12,
    overflow: "hidden",
  },
  poster: { width: "100%", height: "100%" },
  overlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 60,
  },
  title: {
    position: "absolute",
    bottom: 4,
    left: 4,
    right: 4,
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
});
