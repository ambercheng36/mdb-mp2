import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#ffffff",
  },
  h1: {
    fontFamily: "Avenir-Medium",
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 20,
  },
  h2: {
    fontFamily: "Avenir-Light",
    fontSize: 18,
    fontWeight: "300",
    color: "gray",
    marginTop: 5,
    textAlign: "center",
  },
  h3: {
    fontFamily: "Avenir-Light",
    fontSize: 18,
    fontWeight: "300",
    color: "gray",
    marginTop: 20,
    textAlign: "center",
  },
  h4: {
    fontFamily: "Avenir-Light",
    fontSize: 18,
    fontWeight: "300",
    marginTop: 20,
    textAlign: "center",
  },
  movieImage: {
    width: "50%",
    height: "50%",
    resizeMode: "cover",
    marginBottom: 20,
    alignSelf: "center",
  },
});
