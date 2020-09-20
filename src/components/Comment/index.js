import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

const Comment = ({ userName, text, date }) => {
  return (
    <View style={styles.comment}>
      <View style={styles.userAndDate}>
        <Text style={styles.username}>{userName}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Comment;
