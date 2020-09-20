import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  comment: {
    paddingLeft: 10,
    paddingBottom: 5,
    flexWrap: "wrap",
  },
  userAndDate: {
    paddingRight: 10,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
