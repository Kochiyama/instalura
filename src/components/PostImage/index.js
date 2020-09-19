import React, { Fragment } from "react";
import { Image, Text } from "react-native";

import styles from "./styles";

const PostImage = ({ imageUrl, description }) => {
  return (
    <Fragment>
      <Image style={styles.image} source={imageUrl} />
      <Text style={styles.description}>{description}</Text>
    </Fragment>
  );
};

export default PostImage;
