import { StyleSheet, Text, View, Dimensions } from "react-native";

import React, { useEffect } from "react";
import { Center, VStack } from "native-base";
import { AntDesign } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const RightScreen = ({ setIsHomescreen }) => {
  useEffect(() => {
    setTimeout(() => {
      setIsHomescreen(true);
    }, 1000);
  }, []);
  return (
    <View style={styles.container}>
        <VStack justifyContent="center">
          <Center h="40" w="40" bg="#22A940" borderRadius={100} shadow={3}>
            <AntDesign name="check" size={80} color="white" />
          </Center>
          <Text style={styles.containerTiitle}>
            You personalized work is ready.
          </Text>
        </VStack>
    </View>
  );
};

export default RightScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: windowHeight,
    justifyContent: "center",
  },
  containerTiitle: {
    fontSize: 13,
    marginTop: 20,
    color: "#b5b5b5",
    fontWeight: "bold",
  },
});
