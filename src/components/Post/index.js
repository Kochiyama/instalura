import React, { Fragment } from "react";
import PostHeader from "../Header/index";
import PostImage from "../PostImage/index";

// import styles from "./styles";

const Post = ({ user, imageUrl, description }) => (
  <Fragment>
    <PostHeader user={user} />
    <PostImage imageUrl={imageUrl} description={description} />
  </Fragment>
);

export default Post;
