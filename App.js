import { StatusBar } from "expo-status-bar";
import React, { Fragment } from "react";
import { StyleSheet, Text, Image } from "react-native";

import image from "./res/alura.jpg";

export default function App() {
  return (
    <Fragment>
      <Text>Marcelo</Text>
      <Image source={image} />
      <Text>Diana</Text>
      <Image source={image} />
      <StatusBar style="auto" />
    </Fragment>
  );
}
