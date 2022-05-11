import { React, useContext } from "react";
import { StyleSheet } from "react-native";
import BlogForm from "./components/BlogForm";
import { Context } from "./context/BlogContext";

const EditScreen = ({ navigation }) => {
  const { state, editBlogPost } = useContext(Context);

  const id = navigation.getParam("id");
  console.log("Edit Screen " + id);

  const selectedBlog = state.find((item) => item.id === id);

  return (
    <BlogForm
      initialValues={{
        title: selectedBlog.title,
        description: selectedBlog.description,
      }}
      submitcallback={(title, description) => {
        console.log("Edit button Pressed" + title + description)
        editBlogPost(id,title,description,()=>{
          navigation.pop();
        })
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
