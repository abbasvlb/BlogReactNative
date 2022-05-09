import { React, useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Context } from "./context/BlogContext";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const id = navigation.getParam("id");
  console.log(id);

  const selectedBlog = state.find((item) => item.id === id);

 

  return (
    <View>
      <Text>
        {selectedBlog.title} {selectedBlog.id}
      </Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default ShowScreen;
