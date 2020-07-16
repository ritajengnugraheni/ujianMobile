import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";



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
      <Text style={{ flex: 1, textAlign: "right",top: 20 }} bold>
        {props.title}
      </Text>
    </View>
  );
};
