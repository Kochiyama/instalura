import React, { Fragment } from "react";
import PostHeader from "../PostHeader/index";
import PostImage from "../PostImage/index";
import PostFooter from "../PostFooter/index";
import Comments from "../Comments/index";

// import styles from "./styles";

const Post = ({ userName, userUrl, url, description, likes, comments }) => {
  return (
    <Fragment>
      <PostHeader userName={userName} userUrl={userUrl} />
      <PostImage url={url} description={description} />
      <PostFooter likes={likes} description={description} />
      <Comments comments={comments} />
    </Fragment>
  );
};

export default Post;
