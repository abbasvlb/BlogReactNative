import { React, useContext } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Context } from "./context/BlogContext";
import { AntDesign, Feather } from "@expo/vector-icons";
import ShowScreen from "./ShowScreen";

const IndexScreen = (props) => {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);

  return (
    <View>
      
      <FlatList
        data={state}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                console.log("pressed");
                props.navigation.navigate("ShowScreen", { id: item.id });
              }}
            >
              <View style={style.row}>
                <Text style={style.title}>
                  {item.title} - {item.description}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <AntDesign name="delete" style={style.icon} color="black" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = (props) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => props.navigation.navigate('CreateBlog')}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
    
  };
};

const style = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});

export default IndexScreen;
