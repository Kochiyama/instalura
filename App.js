import { StatusBar } from "expo-status-bar";
import React, { Fragment } from "react";
import { FlatList } from "react-native";

import Post from "./src/components/Post/index";

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
    description: "This is a description",
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
    description: "This is a description",
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
    description: "This is a description",
  },
  {
    id: 3,
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
    description: "This is a description",
  },
  {
    id: 4,
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
    description: "This is a description",
  },
  {
    id: 5,
    user: {
      name: "Marcelo Haruo Kochiyama",
      imageUrl: {
        uri:
          "https://avatars0.githubusercontent.com/u/26096036?s=460&u=646df6230922902d6e60ff5a4f0a6db98a63e7a0&v=4",
      },
      description: "This is a description",
    },
    imageUrl: {
      uri:
        "https://images.unsplash.com/photo-1600184831467-29f64598f37e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    },
    description: "This is a description",
  },
];

export default function App() {
  const post = ({ item }) => (
    <Post
      user={item.user}
      imageUrl={item.imageUrl}
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
