import { Box, Center, Heading, HStack, VStack } from "native-base";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

const CustomModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <HStack
              justifyContent="space-between"
              bg="white"
              p={3}
              alignItems="center"
              w="100%"
            >
              <Heading size="sm">Watch Video to Use</Heading>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Entypo name="cross" size={24} color="black" />
              </Pressable>
            </HStack>
            <View mt={5}>
              <Text style={styles.watchText}>
                Watch the Video to Use training for free
              </Text>
            </View>
            <Center
              h="40"
              w="40"
              mt={5}
              bg="#2AD352"
              //   borderColor="primary.300"
              //   borderWidth={3}
              rounded="md"
            >
              <Entypo name="controller-play" size={50} color="#fff" />
              <Heading size="md" color="#fff" mt={3}>
                Watch
              </Heading>
            </Center>
          </View>
        </View>
      </Modal>
      <Pressable
        // style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Box mt={20} mb={5} alignItems="center">
          <VStack justifyContent="center">
            <Center h="40" w="40" bg="#2AD352" borderRadius={100} shadow={3}>
              <Entypo name="controller-play" size={80} color="white" />
            </Center>
          </VStack>
        </Box>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    height: "50%",
    width: "80%",
    backgroundColor: "#e6e6e6",
    borderRadius: 5,
    padding: 5,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 5,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#fff",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },

  watchText: {
    marginTop: 40,
  },
});

export default CustomModal;
