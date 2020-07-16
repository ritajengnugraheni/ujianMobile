import "react-native-gesture-handler";
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Button from './src/components/Button/Button';
import TextInputUI from './src/components/Input/TextInputUI';
import { H1 } from 'native-base';
import LoginScreen from './src/screens/Auth/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import RootNavigator from "./src/navigators/RootNavigator"
import reducers from "./src/redux/reducers"

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
const Stack = createStackNavigator();

export default function App() {
  return (

    <Provider store={store}>
      <RootNavigator/>
    </Provider>
    // <NavigationContainer>
    // <Stack.Navigator>
    //      <Stack.Screen component={LoginScreen} name="Login"/>
    // </Stack.Navigator>
    // </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
