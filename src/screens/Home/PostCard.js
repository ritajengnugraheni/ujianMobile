import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    TouchableOpacity,
} from "react-native";

import Colors from "../../constants/Colors";
import ImageScale from "react-native-scalable-image";
import { Icon } from "native-base";



const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
    likeBtn: {
        fontSize: 22,
        color: "orange",
        marginLeft: 4
    },
});

export default ({ navigation, data }) => {
    return (
        <View
            style={{
                backgroundColor: Colors.backgroundColor,
                width: width - 30,
                marginHorizontal: 10,
                borderRadius: 6,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 3,
                },
                shadowOpacity: 0.5,
                shadowRadius: 8,
                elevation: 6,
                marginVertical: 10,
            }}
        >
            <TouchableOpacity
                onPress={() => navigation.navigate("HomePostDetail", { postDetailData: data })}
            >

                <ImageScale
                    source={{
                        uri: data.image,
                    }}
                    style={{
                        borderTopLeftRadius: 6,
                        borderTopRightRadius: 6,
                    }}
                    width={width - 30}
                />

            </TouchableOpacity>
            <View style={{ paddingHorizontal: 13 }}>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 11,
                    }}
                >

                    <View style={{ marginLeft: 10 }}>
                        <Text >{data.restaurantName}</Text>
                    </View>
                </View>
                <Text size="sm" style={{ marginTop: 11, height: null }}>  {data.address}</Text>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 25,
                        paddingBottom: 75,
                        justifyContent: "space-between",
                    }}
                >
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Icon style={{ ...styles.likeBtn }} type="AntDesign" name="star" />
                        <Text style={{ marginLeft: 4 }}>{data.rating}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};
