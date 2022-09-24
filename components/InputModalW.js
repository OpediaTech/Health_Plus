import { Platform, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import {
  Actionsheet,
  Box,
  Button,
  Text,
  Center,
  useDisclose,
  Input,
  KeyboardAvoidingView,
  HStack,
} from "native-base";

const InputModalW = () => {
  const { isOpen, onOpen, onClose } = useDisclose();

  const [foot, setFoot] = useState();
  const [inch, setInch] = useState();

  return (
    <View>
      <Center>
        <TouchableOpacity onPress={onOpen}>
          <Text
            borderWidth={1}
            px={16}
            py={3}
            borderColor="#e6e6e6"
            borderRadius={5}
            fontSize={18}
            color="#666"
          >
            Select Weight
          </Text>
        </TouchableOpacity>
        <Actionsheet isOpen={isOpen} onClose={onClose}>
          <Actionsheet.Content>
            <KeyboardAvoidingView
              h={{
                base: "500px",
                lg: "auto",
              }}
              w={{
                base: "100%",
                lg: "auto",
              }}
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <Input
                variant="rounded"
                type="number"
                placeholder="Heigh in foot"
              />
              <Input mt={4} variant="rounded" placeholder="Heigh in Inch" />
              <HStack mt={5} justifyContent="space-evenly">
                <Button
                  // ref={myRef}
                  size="sm"
                  rounded="xl"
                  w="40%"
                  colorScheme="secondary"
                  onPress={onClose}
                >
                  <Text fontSize="md" color="#fff" textAlign="center">
                    Cencel
                  </Text>
                </Button>
                <Button
                  // ref={myRef}
                  size="sm"
                  rounded="xl"
                  w="40%"
                  colorScheme="primary"
                  // onPress={stepHandler}
                >
                  <Text fontSize="md" color="#fff" textAlign="center">
                    Done
                  </Text>
                </Button>
              </HStack>
            </KeyboardAvoidingView>
          </Actionsheet.Content>
        </Actionsheet>
      </Center>
    </View>
  );
};

export default InputModalW;

const styles = StyleSheet.create({});
