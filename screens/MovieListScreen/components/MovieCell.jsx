import React from "react";
import { View, Image, Text } from "react-native";
import { styles } from "../MovieListScreen.styles";

export const MovieCell = (props) => {
  // TODO: Create and return the MovieCell component.
  // HINT: Take a look at the movieCell styles, as well as the video
  // demo in the spec, to figure out what this should look like.
  const { item } = props;
  
  return (
    <View style={styles.movieCell}>
      <View style={styles.movieCellLeft}>
        <Image
          source={{ uri: item.posterurl }}
          style={styles.movieCellImage}
        />
      </View>
      <View style={styles.movieCellRight}>
        <Text style={styles.movieCellTitle}>{item.title}</Text>
        <Text style={styles.movieCellSubtitle}>{item.actors.join(", ")}</Text>
      </View>
    </View>
  );
};
