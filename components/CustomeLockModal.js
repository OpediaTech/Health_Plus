import { Alert, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import {
  Button,
  Center,
  HStack,
  Text,
  Modal,
  VStack,
  Radio,
  Heading,
} from "native-base";

const CustomeLockModal = ({ showModal, setShowModal }) => {
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  return (
    <Center>
      {/* <Button onPress={() => setShowModal(true)}>Button</Button> */}
      <Modal isOpen={showModal} size="lg">
        <Modal.Content width={75} height={75} borderRadius="100" padding={0}>
          {/* <Modal.Footer> */}
          {/* <Button flex="1">Continue</Button> */}
          {/* <Text>Lock</Text> */}
          <Modal.Body alignItems="center" justifyContent="center">
            <Heading onLongPress={() => setShowModal(false)}>
              <Entypo name="lock" size={30} color="red" />
            </Heading>
          </Modal.Body>
          {/* </Modal.Footer> */}
        </Modal.Content>
        <Text color="black" fontSize="20" bold>
          Long Press to open
        </Text>
      </Modal>
    </Center>
  );
};

export default CustomeLockModal;

const styles = StyleSheet.create({});
