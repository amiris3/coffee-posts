import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';

import Post from './components/Post';
import posts from './data/posts.json';
import { PostItem } from './models/PostItem';

const App = () => {
  const [coffeePosts, setCoffeePosts] = useState(posts.coffeePosts);

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyle={styles.list}>
      {coffeePosts.map((post: PostItem) => {
        return <Post key={'coffee-post-' + post.id} content={post.content} imgsrc={post.imgsrc}/>
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
