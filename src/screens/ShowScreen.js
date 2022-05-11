import { React, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "./context/BlogContext";
import { AntDesign, Feather } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const id = navigation.getParam("id");
  console.log(id);

  const selectedBlog = state.find((item) => item.id === id);

  return (
    <View style={{ padding: 4 }}>
      <Text>Title</Text>
      <Text style={{ fontSize: 18, padding: 4 }}>
        {selectedBlog.title}
      </Text>
      <Text>Description : </Text>
      <Text style={{ fontSize: 18, padding: 4 }}>
        {selectedBlog.description}
      </Text>
    </View>
  );
};

ShowScreen.navigationOptions = (props) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() => {
          console.log("clicked");
          props.navigation.navigate("EditScreen", {
            id: props.navigation.getParam("id"),
          });
        }}
      >
        <Feather name="edit-2" size={30} padding={24} />
      </TouchableOpacity>
    ),
  };
};

const style = StyleSheet.create({});

export default ShowScreen;
