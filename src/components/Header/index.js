import React from "react";
import { Text, Image, View } from "react-native";

import styles from "./styles";

const PostHeader = ({ user }) => {
  return (
    <View style={styles.postHeader}>
      <Image style={styles.image} source={user.imageUrl} />
      <Text style={styles.username}>{user.name}</Text>
    </View>
  );
};

export default PostHeader;
