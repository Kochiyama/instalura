import React from "react";
import { Text, Image, StyleSheet, View } from "react-native";

const PostHeader = ({ user }) => {
  return (
    <View style={styles.postHeader}>
      <Image style={styles.image} source={user.imageUrl} />
      <Text style={styles.username}>{user.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  postHeader: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  username: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default PostHeader;
