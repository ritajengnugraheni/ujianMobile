import React, {useEffect} from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeStack from "./HomeStack";
import LoginScreen from "../screens/Auth/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import {useDispatch,useSelector} from "react-redux"
import AsyncStorage from "@react-native-community/async-storage";
import MainTab from "./MainTab";


const Stack = createStackNavigator();
  
export default () => {
  const dispatch = useDispatch();
  const userSelector = useSelector((state) => state.user);

  useEffect(() => {
    AsyncStorage.getItem("userData")
      .then((storageItem) => {
        if (!storageItem) throw "Item is empty";
        dispatch({
          type: "USER_LOGIN",
          payload: JSON.parse(storageItem),
        });
      })
      .catch((err) => {
        console.log(err);
      });
    // AsyncStorage.removeItem("userData");
  }, []);
  
    return (
      <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>

          {
            userSelector.username ? (<Stack.Screen component={MainTab} name="Home"/>): (
              <Stack.Screen component={LoginScreen} name="login"/>
            )
          }   
      </Stack.Navigator>
      </NavigationContainer>
     );
  };