import { React, useState, useContext } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import BlogForm from "./components/BlogForm";
import { Context } from "./context/BlogContext";

const CreateBlog = ({navigation}) => {
  
  const { addBlogPost } = useContext(Context);

  return (
    <BlogForm submitcallback = {(title,description)=>{
        addBlogPost(title,description,()=>{
            navigation.navigate('IndexScreen')
        })
    }}/>
  );
};

const styles = StyleSheet.create({
  
});

export default CreateBlog;
