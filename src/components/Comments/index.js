import React, { Fragment, useState } from "react";
import {
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Comment from "../Comment/index";

import sendIcon from "../../../res/send.png";
import styles from "./styles";

const Comments = ({ comments }) => {
  const [commentsState, setCommentsState] = useState(comments);
  const [commentField, setCommentField] = useState("");

  const addComment = () => {
    const actualDateAndTime = new Date();

    const newComment = {
      date: actualDateAndTime.toLocaleString(),
      text: commentField,
      userName: "Marcelo Kochiyama",
    };

    setCommentsState([...commentsState, newComment]);

    setCommentField("");
  };

  const comment = ({ item }) => {
    return (
      <Comment userName={item.userName} date={item.date} text={item.text} />
    );
  };

  return (
    <Fragment>
      <FlatList
        data={commentsState}
        renderItem={comment}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={styles.createComment}>
        <TextInput
          style={styles.commentInput}
          placeholder="Deixe seu comentario"
          onChangeText={(text) => setCommentField(text)}
          value={commentField}
        />
        <TouchableOpacity style={styles.sendCommentButton} onPress={addComment}>
          <Image style={styles.sendCommentImage} source={sendIcon} />
        </TouchableOpacity>
      </View>
    </Fragment>
  );
};

export default Comments;
