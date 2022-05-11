import { React, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const BlogForm = ({ initialValues, submitcallback }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [description, setDescription] = useState(initialValues.description);

  return (
    <View>
      <Text style={styles.textview}>Enter Title</Text>
      <TextInput
        value={title}
        accessibilityHint="enter title"
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(enteredText) => {
          setTitle(enteredText);
        }}
      />
      <Text style={styles.textview}>Enter description</Text>
      <TextInput
        value={description}
        accessibilityHint="enter description"
        style={{ ...styles.input, height: 64 }}
        autoCapitalize="none"
        multiline={true}
        autoCorrect={false}
        onChangeText={(enteredText) => {
          setDescription(enteredText);
        }}
      />
      <Button
        title="Add blog"
        onPress={() => {
          submitcallback(title, description);
        }}
      ></Button>
    </View>
  );
};

BlogForm.defaultProps = {
  initialValues: {
    title: "",
    description: "",
  },
};

const styles = StyleSheet.create({
  input: {
    margin: 8,
    height: 32,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 4,
  },
  textview: {
    margin: 4,
  },
});

export default BlogForm;
