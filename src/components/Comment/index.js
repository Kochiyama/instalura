import React, { Fragment } from "react";
import { Text } from "react-native";

const Comment = ({ userName, text, date }) => {
  return (
    <Fragment>
      <Text>{date}</Text>
      <Text>{userName}</Text>
      <Text>{text}</Text>
    </Fragment>
  );
};

export default Comment;
