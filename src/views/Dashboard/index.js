import { StatusBar } from "expo-status-bar";
import React, { Fragment, useEffect, useState } from "react";
import { FlatList } from "react-native";

import getPostsFromApi from "../../api/feed";

import Header from "../../components/Header/index";
import Post from "../../components/Post/index";

const Dashboard = () => {
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
      likes={item.likes}
      comments={item.comentarios}
    />
  );

  return (
    <Fragment>
      <StatusBar style="auto" />
      <Header />
      <FlatList
        data={posts}
        renderItem={post}
        keyExtractor={(item) => item.id.toString()}
      />
    </Fragment>
  );
};

export default Dashboard;
