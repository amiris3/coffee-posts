import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

import Post from './components/Post';
import Publish from './components/Publish';
import posts from './data/posts.json';
import { PostItem } from './models/PostItem';

const App = () => {
  const [coffeePosts, setCoffeePosts] = useState<PostItem[]>(posts.coffeePosts);

  const addCoffeePost = (post: PostItem) => {
    setCoffeePosts([{
      "id": coffeePosts.length,
      "content": post.content,
      "imgsrc": post.imgsrc,
    },
    ...coffeePosts])
  }

  return (
    <SafeAreaView style={styles.container}>
      <Publish addCoffeePost={addCoffeePost} />
      <ScrollView contentContainerStyle={styles.list}>
        {coffeePosts.map((post: PostItem) => {
          return <Post key={'coffee-post-' + post.id} content={post.content} imgsrc={post.imgsrc} />
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#000'
  },
  list: {
    flexGrow: 1,
    alignItems: 'center'
  }
});

export default App;
