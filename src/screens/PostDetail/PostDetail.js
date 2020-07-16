import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    KeyboardAvoidingView,
} from "react-native";


import Colors from "../../constants/Colors";
import { Icon } from "native-base";

import Image from "react-native-scalable-image";
import Header from "../../components/General/Header";
const { width } = Dimensions.get("screen");
const styles = StyleSheet.create({
    header: {
        height: 50,
        flexDirection: "row",
        paddingHorizontal: 18,
        alignItems: "center",
    },
    commentContainer: {
        paddingHorizontal: 30,
        marginTop: 12,
    },
});
export default (props) => {
    const { postDetailData } = props.route.params
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: Colors.backgroundColor,
            }}
        >
            <Header {...props} title={postDetailData.restaurantName}/>
            <SafeAreaView />
            <ScrollView style={{ flex: 1 }}>
                <Image
                    style={{ maxHeight: 540,marginTop: 30 }}
                    width={width}
                    source={{ uri: postDetailData.image }}
                />
                <View style={{ ...styles.commentContainer }}>
                    <Text>{postDetailData.restaurantName}</Text>
                    <Text>Rating : {postDetailData.rating}</Text>
                    <Text>Address : {postDetailData.address}</Text>
                    <Text>Cuisines : {postDetailData.cuisine}</Text>
                    <Text>Update at : {postDetailData.updatedAt}</Text>
                    <Text>Open at : {postDetailData.openTime}</Text>
                    <Text>close at : {postDetailData.closeTime}</Text>
                </View>
            </ScrollView>
            <KeyboardAvoidingView
                behavior="height"
                keyboardVerticalOffset={15}
                style={{
                    paddingHorizontal: 15,
                    backgroundColor: "#20242F",
                    paddingVertical: 10,
                }}
            >
                <View style={{ flexDirection: "row", alignItems: "center" }}>

                </View>
                <SafeAreaView />
            </KeyboardAvoidingView>
        </View>
    );
};