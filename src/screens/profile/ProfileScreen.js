import React, { useEffect, useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import  Colors from "../../constants/Colors";
import Button from "../../components/Button/Button";
import { useSelector, useDispatch } from "react-redux";

import AsyncsStorage from "@react-native-community/async-storage"

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        backgroundColor: Colors.backgroundColor,
        paddingHorizontal:30

    }
});


export default ({ navigation }) => {
    const [postCount, setPostCount]= useState(0);
    const userSelector = useSelector(state => state.user)
    const dispatch = useDispatch();

    const LogoutHandler =()=> {
        AsyncsStorage.removeItem("userData")
        .then(result=>{
            console.log("LOGOUT");
            dispatch({
                type:"USER_LOGOUT"
            })
        })
        .catch(err=> {
            console.log(err);
            
        })
    }

    return (
        <View style={{ ...styles.container }}>
            <Text>LOGOUT AJA</Text>
        
           <Button onPress={LogoutHandler} style={{marginTop : 10}}>Logout</Button>
        </View>
    )
}