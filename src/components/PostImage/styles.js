import { StyleSheet, Dimensions } from "react-native";
const deviceWidth = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  image: {
    width: deviceWidth,
    height: deviceWidth,
  },
  description: {
    padding: 10,
  },
});

export default styles;
