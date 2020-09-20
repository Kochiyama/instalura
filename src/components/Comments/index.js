import React, { Fragment } from "react";
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
      <View style={styles.createComment}>
        <TextInput
          style={styles.commentInput}
          placeholder="Deixe seu comentario"
        />
        <TouchableOpacity style={styles.sendCommentButton}>
          <Image style={styles.sendCommentImage} source={sendIcon} />
        </TouchableOpacity>
      </View>
    </Fragment>
  );
};

export default Comments;
