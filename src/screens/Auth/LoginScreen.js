import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import TextInputUI from "../../components/Input/TextInputUI";
import Button from "../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-community/async-storage";
import Axios from "axios";
import { API_URL } from "../../constants/API";
import { Icon } from "native-base";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
  },
  contentContainer: {
    paddingHorizontal: 30,
  },
  welcomeText: {
    fontSize: 30,
    height: 30,
  },
  loginText: {
    marginTop: 12,
  },
});

export default (props) => {
  const [username, setUsername] = useState("");

  const dispatch = useDispatch();
  const userSelector = useSelector((state) => state.user);

  const loginBtnHandler = () => {
        AsyncStorage.setItem(
          "userData",
          JSON.stringify({
            username,
          })
        )
    
  };

  return (
    <View style={{ ...styles.container }}>
      <View>
        <View>
          {/* <Icon style={{color:"orange"}} type="Ionicons" name="fast-food"  /> */}
      <Text>TOMATO APP RESTAURANT</Text>
        </View>
        <View 
         style={{
          backgroundColor: "white",
          opacity: 0.2,
          borderRadius: 22,
          marginTop:10
        }}>
          <TextInputUI
            style={{
              fontSize: 17,
              color: "white",
              lineHeight: 19,
            }}
            placeholder="username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
        </View>
        <View style={{marginTop:10}}>
          <Button
           onPress={loginBtnHandler}
           containerStyle={{ marginTop: 40 }}>
             Login</Button>
        </View>
      </View>
    </View>
  );
};