import React from "react";
import { Text, Image, View } from "react-native";

import styles from "./styles";

const PostHeader = ({ userName, userUrl }) => {
  return (
    <View style={styles.postHeader}>
      <Image style={styles.image} source={{ uri: userUrl }} />
      <Text style={styles.username}>{userName}</Text>
    </View>
  );
};

export default PostHeader;
