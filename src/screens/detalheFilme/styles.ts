import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: { flex: 1 },
  backdrop: { width: "100%", height: 220, resizeMode: "cover" },
  headerContent: {
    flexDirection: "row",
    marginTop: 20,
    paddingHorizontal: 16,
  },
  poster: {
    width: 120,
    height: 180,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#fff",
    backgroundColor: "#ccc",
  },
  textContainer: {
    flex: 1,
    paddingLeft: 16,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 6,
    color: "#222", // Mantém o texto preto
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  vote: { marginLeft: 4, fontSize: 14, color: "#333" },
  dot: { marginHorizontal: 6, color: "#333" },
  runtime: { fontSize: 14, color: "#333" },
  genres: { fontStyle: "italic", fontSize: 14, color: "#444" },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#111", // Cor do título da seção
  },
  overview: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: "justify",
    color: "#222", // Cor da sinopse
  },
  card: {
    marginTop: 20,
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.1)', // Card com fundo semi-transparente
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
