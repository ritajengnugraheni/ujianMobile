import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import Colors  from "../constants/Colors";
import { Icon } from "native-base";
import { Dimensions } from "react-native";
import ProfileScreen from "../screens/profile/ProfileScreen";

const {width} = Dimensions.get("screen")

const Tab = createBottomTabNavigator();

export default () => {
    return (
        // "#F54B64",
        <Tab.Navigator tabBarOptions={{
            activeTintColor: "white" ,
            style: {
                backgroundColor: "#20242F",
                borderTopWidth: 0,
                paddingTop: 10,
                alignSelf:"center",
                alignItems:"center"
            }
        }}>
            <Tab.Screen
                name="Home"
                component={HomeStack}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon type="Entypo" name="home"
                            style={{ color, fontSize: size }} />
                    )
                }} />

            <Tab.Screen
                name="User"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color, size }) =>(
                        <Icon type="Ionicons" name="restaurant" style={{ color }} />
                    )
                       
                }} />
        </Tab.Navigator>
    );
};
