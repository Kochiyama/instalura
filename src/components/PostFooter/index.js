import React, { Fragment, useEffect, useState } from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";

import heartUnliked from "../../../res/s2.png";
import heartLiked from "../../../res/s2-checked.png";

import styles from "./styles";

const PostFooter = ({ likes, description }) => {
  const [totaLikes, setTotalLikes] = useState(likes);
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    const currentTotalLikes = totaLikes;
    if (isLiked) {
      setTotalLikes(currentTotalLikes - 1);
    } else {
      setTotalLikes(currentTotalLikes + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <Fragment>
      <View style={styles.footer}>
        <TouchableOpacity onPress={toggleLike}>
          <Image
            style={styles.heart}
            source={isLiked ? heartLiked : heartUnliked}
          />
        </TouchableOpacity>
        <Text>{totaLikes} Likes</Text>
      </View>
      <Text style={styles.description}>{description}</Text>
    </Fragment>
  );
};

export default PostFooter;
