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
  },
  errorText: {
    textAlign: "center",
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 20,
    marginLeft: 16,
    marginBottom: 10,
  },
  flatList: {
    paddingHorizontal: 4,
    alignItems: "center", 
  },
  card: {
    width: 120,
    height: 180,
    marginRight: 12,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0.6)", 
    justifyContent: "center",
    alignItems: "center",
  },
  poster: {
    width: "100%",
    height: "100%",
  },
 overlay: {
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 0,
  height: 30,
  backgroundColor: "rgba(0, 0, 0, 0.9)",
  justifyContent: "center", 
  alignItems: "center",     
},
  title: {
    position: "absolute",
    bottom: 4,
    left: 4,
    right: 4,
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
  },
});
