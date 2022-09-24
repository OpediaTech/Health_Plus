import { StyleSheet, View } from "react-native";
import React from "react";
import { Center, Text, HStack } from "native-base";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View>
      <HStack
        space={3}
        justifyContent="space-between"
        alignItems="center"
        mx={3}
      >
        <View style={styles.GPc}>
          <Text color="white">GPS</Text>
        </View>
        <View style={styles.borderB}>
          <Text color="#e6e6e6">Walk</Text>
        </View>
        <View style={styles.borderc}>
          <Ionicons name="settings" size={24} color="white" />
        </View>
      </HStack>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  borderB: {
    borderColor: "red",

    backgroundColor: "#FAFAFA",
    height: 40,
    width: 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    opacity: 0.4,
  },
  borderc: {
    borderColor: "red",
    backgroundColor: "#FAFAFA",
    height: 40,
    width: 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    opacity: 0.6,
  },
});
