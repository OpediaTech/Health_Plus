import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import {
  AspectRatio,
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Text,
  Stack,
  VStack,
  Modal,
  FormControl,
  Input,
} from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import CustomModal from "./CustomModal";
import { useNavigation } from "@react-navigation/native";

const windowHeight = Dimensions.get("window").height;

const CardDaySecond = () => {
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("report");
        }}
      >
        <Box mt={5} w={80} alignSelf="center" rounded="md" shadow={3}>
          <HStack
            bg="#F9F9F9"
            p={5}
            space={3}
            alignItems="center"
            justifyContent="space-evenly"
          >
            <Center h="20" w="20" bg="#2AD352" rounded="md" shadow={3}>
              <FontAwesome5 name="walking" size={30} color="white" />
            </Center>
            {/* <Center h="20" w="20" bg="primary.500" rounded="md" shadow={3}>
            <Heading color="white">8:00</Heading>
            <Text color="white">Running</Text>
          </Center> */}
            <Heading size="sm" ml="-1">
              Walk
            </Heading>
            <Center h="10" w="20" bg="#ECECEC" rounded="md">
              <Heading size="sm" color="#b5b5b5">
                26:00
              </Heading>
            </Center>
          </HStack>
        </Box>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("run");
        }}
      >
        <Box mt={5} w={80} alignSelf="center" rounded="md" shadow={3}>
          <HStack
            bg="#F9F9F9"
            p={5}
            space={3}
            alignItems="center"
            justifyContent="space-evenly"
          >
            <Center h="20" w="20" bg="#71EA7E" rounded="md" shadow={3}>
              <FontAwesome5 name="running" size={30} color="white" />
            </Center>
            {/* <Center h="20" w="20" bg="primary.500" rounded="md" shadow={3}>
            <Heading color="white">8:00</Heading>
            <Text color="white">Running</Text>
          </Center> */}
            <Heading size="sm" ml="-1">
              Run
            </Heading>
            <Center h="10" w="20" bg="#ECECEC" rounded="md">
              <Heading size="sm" color="#b5b5b5">
                26:00
              </Heading>
            </Center>
          </HStack>
        </Box>
      </TouchableOpacity>
      {/* Days one card  */}
      {/* Play button  */}

      <CustomModal />
    </View>
  );
};

export default CardDaySecond;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: windowHeight,
  },
});
