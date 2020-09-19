import React, { Fragment } from "react";
import { Image } from "react-native";
import PostHeader from "../Header/index.js";

import styles from "./styles";

const Post = ({ user, imageUrl }) => (
  <Fragment>
    <PostHeader user={user} />
    <Image style={styles.image} source={imageUrl} />
  </Fragment>
);

export default Post;
