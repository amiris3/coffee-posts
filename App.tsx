import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';

import Post from './components/Post';

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.list}>
          <Post content='hello world' imgsrc='https://coffee.alexflipnote.dev/mVOd9yC1u3E_coffee.jpg'/>
      </ScrollView>
    </SafeAreaView>
  );
};

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
