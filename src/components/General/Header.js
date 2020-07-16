import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

import Colors from "../../constants/Colors";
import { Icon } from "native-base";

const styles = StyleSheet.create({
  header: {
    height: 50,
    flexDirection: "row",
    paddingHorizontal: 18,
    alignItems: "center",
  },
});

export default (props) => {
  return (
    <View style={{ ...styles.header }}>
      <TouchableOpacity
        onPress= {() => props.navigation.goBack()}
        style={{
          ...StyleSheet.absoluteFillObject,
          top: 30,
          bottom: 0,
          left: 16,
          right: null,
          zIndex: 1,
        }}
      >
        <Icon
          type="AntDesign"
          name="arrowleft"
          style={{
            color: "black",

          }}
        />
      </TouchableOpacity>
      <Text style={{ flex: 1, textAlign: "center",top: 20 }} bold>
        {props.title}
      </Text>
    </View>
  );
};
