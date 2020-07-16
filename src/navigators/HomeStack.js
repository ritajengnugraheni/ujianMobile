import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/Home/HomeScreen";
import PostDetail from "../screens/PostDetail/PostDetail"

const Stack = createStackNavigator();

export default () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen component={HomeScreen} name="Home"/>
        <Stack.Screen component={PostDetail} name ="HomePostDetail"/>
      </Stack.Navigator>
    );
  };