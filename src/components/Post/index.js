import React, { Fragment } from "react";
import PostHeader from "../PostHeader/index";
import PostImage from "../PostImage/index";

// import styles from "./styles";

const Post = ({ userName, userUrl, url, description }) => {
  console.log(userName, userUrl, url, description);
  return (
    <Fragment>
      <PostHeader userName={userName} userUrl={userUrl} />
      <PostImage url={url} description={description} />
    </Fragment>
  );
};

export default Post;
