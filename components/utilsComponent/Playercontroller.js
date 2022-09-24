import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Center, HStack } from "native-base";
import { Entypo } from "@expo/vector-icons";

const Playercontroller = ({ isPause, setIsPause }) => {
  return (
    <View>
      <HStack
        mt={20}
        space={3}
        justifyContent="space-evenly"
        alignItems="center"
      >
        {/* <Center
          height="60"
          w="20"
          bg="primary.700"
          borderRadius="100"
          rounded="md"
          shadow={3}
        /> */}
        <View style={styles.borderc}>
          <Entypo name="location-pin" size={22} color="#b5b5b5" />
        </View>
        {isPause ? (
          <TouchableOpacity onPress={() => setIsPause(true)}>
            <View style={styles.borderB}>
              {/* <Entypo name="controller-play" size={24} color="#b5b5b5" /> */}

              <Entypo name="controller-paus" size={24} color="#b5b5b5" />
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setIsPause(false)}>
            <View style={styles.borderB}>
              {/* <Entypo name="controller-play" size={24} color="#b5b5b5" /> */}

              <Entypo name="controller-play" size={24} color="#b5b5b5" />
            </View>
          </TouchableOpacity>
        )}

        <View style={styles.borderc}>
          <Entypo name="lock" size={24} color="#b5b5b5" />
        </View>
      </HStack>
    </View>
  );
};

export default Playercontroller;

const styles = StyleSheet.create({
  borderB: {
    borderColor: "red",
    padding: 20,
    backgroundColor: "#FAFAFA",
    height: 80,
    width: 80,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    opacity: 0.8,
  },
  borderc: {
    borderColor: "red",
    padding: 20,
    backgroundColor: "#FAFAFA",
    height: 60,
    width: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    opacity: 0.8,
  },
});
