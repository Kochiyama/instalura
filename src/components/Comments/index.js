import React, { Fragment } from "react";
import { FlatList, Text } from "react-native";
import Comment from "../Comment/index";

const Comments = ({ comments }) => {
  const comment = ({ item }) => {
    return (
      <Comment userName={item.userName} date={item.date} text={item.text} />
    );
  };

  return (
    <Fragment>
      <FlatList
        data={comments}
        renderItem={comment}
        keyExtractor={(item, index) => index.toString()}
      />
    </Fragment>
  );
};

export default Comments;
