import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    marginTop: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerText: {
    fontSize: 26,
    fontWeight: "700",
  },

  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },

  errorText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "800",
    marginTop: 24,
    marginLeft: 16,
    marginBottom: 10,
  },

  flatList: {
    paddingLeft: 16,
    paddingRight: 8,
  },

  card: {
    width: 120,
    height: 180,
    marginRight: 12,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "flex-end",
  },

  poster: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },

  overlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 40,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },

  title: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    paddingHorizontal: 4,
    paddingBottom: 6,
    zIndex: 1,
  },
});
