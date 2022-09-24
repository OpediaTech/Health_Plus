import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/utilsComponent/Header";
import CountingCircle from "../components/utilsComponent/CountingCircle";
import History from "../components/utilsComponent/History";
import Playercontroller from "../components/utilsComponent/Playercontroller";
import { HStack } from "native-base";
import { Entypo } from "@expo/vector-icons";
import CustomeLockModal from "../components/CustomeLockModal";

const Walk = () => {
  const [isPause, setIsPause] = useState(true);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {}, [isPause]);
  return (
    <ImageBackground
      source={require("../assets/Rectangle1.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <CustomeLockModal showModal={showModal} setShowModal={setShowModal} />
      <View>
        <Text></Text>
      </View>
      <Header />
      <CountingCircle isPause={isPause} />
      <History />
      {/* <Playercontroller isPause={isPause} setIsPause={setIsPause} /> */}
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
          {/* {isPause === true ? ( */}

          <TouchableOpacity onPress={(isPause) => setIsPause(!isPause)}>
            <View style={styles.borderB}>
              {/* <Entypo name="controller-play" size={24} color="#b5b5b5" /> */}

              <Entypo
                name={isPause ? "controller-play" : "controller-paus"}
                size={24}
                color="#b5b5b5"
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setShowModal(true)}>
            <View style={styles.borderc}>
              <Entypo name="lock" size={24} color="#b5b5b5" />
            </View>
          </TouchableOpacity>
        </HStack>
      </View>
    </ImageBackground>
  );
};

export default Walk;

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
