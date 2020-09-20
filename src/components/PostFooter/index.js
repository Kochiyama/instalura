import React from "react";
import { Image, TouchableHighlight, View, Text } from "react-native";

import heartUnliked from "../../../res/s2.png";

import styles from "./styles";

const PostFooter = () => {
  return (
    <View style={styles.footer}>
      <TouchableHighlight>
        <Image style={styles.heart} source={heartUnliked} />
      </TouchableHighlight>
      <Text>0 Likes</Text>
    </View>
  );
};

export default PostFooter;
