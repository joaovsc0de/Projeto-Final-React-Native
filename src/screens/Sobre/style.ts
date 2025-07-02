import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    position: "relative",
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
    opacity: 0.5,
  },
  content: {
    flexGrow: 1,
    paddingVertical: 40,
    paddingHorizontal: 16,
    zIndex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "justify",
    marginBottom: 16,
    backgroundColor: "rgba(0, 0, 0, 0.25)", 
    padding: 16,
    borderRadius: 12,
    color: "#fff",
  },
  button: {
    marginTop: 20,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#7f00ff", 
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
