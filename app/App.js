/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createRootNavigator} from './router';
import Boookcase from './screens/Bookcase';
import Book from './screens/Book';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()


// export default createRootNavigator();
export default function App() { 
    return ( 
      <NavigationContainer> 
        <Stack.Navigator> 
          <Stack.Screen name="Ebrary" component = {Boookcase} /> 
          <Stack.Screen name="E-Book" component = {Book} /> 
        </Stack.Navigator> 
      </NavigationContainer> 
    );
  }
