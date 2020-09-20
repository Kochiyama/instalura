import React, { Fragment } from "react";
import { Image, Text } from "react-native";
import PostFooter from "../PostFooter/index";

import styles from "./styles";

const PostImage = ({ url, description }) => {
  return (
    <Fragment>
      <Image style={styles.image} source={{ uri: url }} />
      <PostFooter />
      <Text style={styles.description}>{description}</Text>
    </Fragment>
  );
};

export default PostImage;
