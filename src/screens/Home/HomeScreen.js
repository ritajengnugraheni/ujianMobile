import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
  SafeAreaView,
  TextInput,
  TouchableOpacity
} from "react-native";

import Colors from "../../constants/Colors";
import PostCard from "./PostCard";
import Axios from "axios";
import { API_URL } from "../../constants/API";
import { Icon } from "native-base";
import { useSelector } from "react-redux";
import Header from "../../components/General/Header";
import HeaderUI from "../../components/General/HeaderUI";


const { width } = Dimensions.get("screen");
const styles = StyleSheet.create({});



export default ({ navigation }) => {
  const [postList, setPostList] = useState([]);
  const userSelector = useSelector((state)=> state.user)

  useEffect(() => {
    Axios.get(`${API_URL}/restaurants`)
      .then((res) => {
        console.log(res.data);
        setPostList(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderResto = ({ item }) => {
    return <PostCard navigation={navigation} data={item} />;
  };
  
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.backgroundColor,
      }}
    >
     
      <SafeAreaView />
      <HeaderUI title={userSelector.username}/>
      <FlatList
        ListHeaderComponent={() => {
          return <Text>RESTAURANT</Text>;
        }}
        ListHeaderComponentStyle={{ marginHorizontal: 15 }}
        contentContainerStyle={{ marginTop: 10 }}
        data={postList}
        renderItem={renderResto}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};