import React, { Fragment } from "react";
import { Image, Text } from "react-native";

import styles from "./styles";

const PostImage = ({ url, description }) => {
  return (
    <Fragment>
      <Image style={styles.image} source={{ uri: url }} />
    </Fragment>
  );
};

export default PostImage;
