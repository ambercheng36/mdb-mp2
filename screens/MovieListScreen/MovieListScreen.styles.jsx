const { StatusBar, StyleSheet } = require("react-native");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#ffffff",
  },
  movieCell: {
    backgroundColor: "#ecf0f1",
    padding: 20,
    flexDirection: "row",
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 3.84,
    elevation: 5,
  },
  movieCellTitle: {
    fontFamily: "Avenir-Medium",
    fontSize: 20,
    marginBottom: 8,
  },
  movieCellSubtitle: {
    fontFamily: "Avenir-Light",
    fontSize: 14,
    color: "#888",
  },
  movieCellLeft: {
    height: 100,
    width: 70,
  },
  movieCellImage: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
  movieCellRight: {
    flex: 1,
    marginLeft: 16,
    justifyContent: "center",
  },
});
