import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { PostItem } from '../models/PostItem';

const Post: React.FC<PostItem> = ({ content, imgsrc }) => {
    return (
        <View style={styles.post}>
            <Text style={styles.postTitle}>{content}</Text>
            <Image source={{ uri: imgsrc ? imgsrc : '' }} accessibilityLabel="coffee image" style={styles.image} />
        </View>
    );
};

const win = Dimensions.get('window');
const ratio = win.width / 541;
const styles = StyleSheet.create({
    post: {
        flex: 1,
        backgroundColor: '#fff',
        color: '#000',
        marginBottom: '8%'
    },
    postTitle: {
        fontWeight: '600',
        paddingBottom: '2%',
        color: 'black'
    },
    image: {
        width: win.width - 80,
        height: 362 * ratio
    }
});


export default Post;
