import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import IndexScreen from "./src/screens/IndexScreen";
import { Provider } from "./src/screens/context/BlogContext";
import CreateBlog from "./src/screens/CreateBlog";
import ShowScreen from "./src/screens/ShowScreen";

const navigator = createStackNavigator(
  {
    IndexScreen: IndexScreen,
    CreateBlog: CreateBlog,
    ShowScreen: ShowScreen
  },
  {
    initialRouteName: "IndexScreen",
    defaultNavigationOptions: {
      title: "Blogss",
    },
  }
);

const App = createAppContainer(navigator);

export default () => {

  return (
    <Provider>
      <App />
    </Provider>
  );
};
