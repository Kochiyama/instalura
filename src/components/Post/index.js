import React, { Fragment } from "react";
import PostHeader from "../PostHeader/index";
import PostImage from "../PostImage/index";
import PostFooter from "../PostFooter/index";

// import styles from "./styles";

const Post = ({ userName, userUrl, url, description, likes }) => {
  console.log(likes);
  return (
    <Fragment>
      <PostHeader userName={userName} userUrl={userUrl} />
      <PostImage url={url} description={description} />
      <PostFooter likes={likes} description={description} />
    </Fragment>
  );
};

export default Post;
