import { StatusBar } from "expo-status-bar";
import React from "react";
import Dashboard from "./src/views/Dashboard";
import Login from "./src/views/Login";

const App = () => (
  <>
    <StatusBar style="auto" />
    <Dashboard />
  </>
);

export default App;
