import { StatusBar } from "expo-status-bar";
import React, { Fragment } from "react";
import { StyleSheet, Image, Dimensions, FlatList } from "react-native";

import PostHeader from "./src/components/Header/index.js";

const posts = [
  {
    id: 0,
    user: {
      name: "Marcelo Haruo Kochiyama",
      imageUrl: {
        uri:
          "https://avatars0.githubusercontent.com/u/26096036?s=460&u=646df6230922902d6e60ff5a4f0a6db98a63e7a0&v=4",
      },
    },
    imageUrl: {
      uri:
        "https://avatars0.githubusercontent.com/u/26096036?s=460&u=646df6230922902d6e60ff5a4f0a6db98a63e7a0&v=4",
    },
  },
  {
    id: 1,
    user: {
      name: "Diana Priscila",
      imageUrl: {
        uri:
          "https://avatars0.githubusercontent.com/u/26096036?s=460&u=646df6230922902d6e60ff5a4f0a6db98a63e7a0&v=4",
      },
    },
    imageUrl: {
      uri:
        "https://images.unsplash.com/photo-1600348351012-59ce67d1ef8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
    },
  },
  {
    id: 2,
    user: {
      name: "Marcelo Haruo Kochiyama",
      imageUrl: {
        uri:
          "https://avatars0.githubusercontent.com/u/26096036?s=460&u=646df6230922902d6e60ff5a4f0a6db98a63e7a0&v=4",
      },
    },
    imageUrl: {
      uri:
        "https://images.unsplash.com/photo-1600184831467-29f64598f37e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    },
  },
];

const deviceWidth = Dimensions.get("screen").width;

const Post = ({ user, imageUrl }) => (
  <Fragment>
    <PostHeader user={user} />
    <Image style={styles.image} source={imageUrl} />
  </Fragment>
);

export default function App() {
  const renderItem = ({ item }) => (
    <Post user={item.user} imageUrl={item.imageUrl} />
  );

  return (
    <Fragment>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <StatusBar style="auto" />
    </Fragment>
  );
}

const styles = StyleSheet.create({
  image: {
    width: deviceWidth,
    height: deviceWidth,
  },
});
