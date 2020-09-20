import { StatusBar } from "expo-status-bar";
import React, { Fragment, useEffect, useState } from "react";
import { FlatList } from "react-native";

import getPostsFromApi from "./src/api/feed";

import Post from "./src/components/Post/index";

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPostsFromApi(setPosts);
    console.log(posts);
  }, []);

  const post = ({ item }) => (
    <Post
      userName={item.userName}
      userUrl={item.userURL}
      url={item.url}
      description={item.description}
    />
  );

  return (
    <Fragment>
      <FlatList
        data={posts}
        renderItem={post}
        keyExtractor={(item) => item.id.toString()}
      />
      <StatusBar style="auto" />
    </Fragment>
  );
}
