import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const Book = ({route}) => {

  //ES6 object destructuring
  
    return (
      <>
      <View style={styles.container}>
        <Image style={styles.cover} source={route.params.pop.thumbnail} resizeMode="contain"  />
        <Text style={styles.title}>{route.params.pop.title}</Text>
        <Text style={styles.author}>Developed by: {route.params.pop.author}</Text>
        </View>
        <View>
        <Text style={styles.description}>{route.params.pop.description}</Text>
      </View>
      </>
    );
  };
  
  export default Book;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  cover: {
    width: 400,
    height: 400,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 12,
    fontWeight: 900,
  },
  author: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 12,
    fontWeight: 400,
  },
  description: {
    margin: 10,
  }
});