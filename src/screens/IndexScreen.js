import { React, useContext } from 'react'
import { View, Text, StyleSheet,Button } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import {Context} from './context/BlogContext';



const IndexScreen = () => {
    const {state,addBlogPost} = useContext(Context);

    return <View>

        <Button title = 'Add blog posts'
        onPress={addBlogPost}
        />
        <FlatList
            data={state}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => {
                return <Text>{item.title}</Text>
            }
            }
        />


    </View>

};

const style = StyleSheet.create({

});

export default IndexScreen;