import { View, StyleSheet } from "react-native";
import * as React from "react";

import AppScreen from "../utils/AppScreen";
import {
  Avatar,
  Button,
  Center,
  Heading,
  HStack,
  Text,
  VStack,
} from "native-base";
import InputModal from "../components/InputModal";
import PressedItem from "../components/PressedItem";
import RightScreen from "../components/RightScreen";
import InputModalW from "../components/InputModalW";

export default function App({ setIsHomescreen }) {
  const [done, setDone] = React.useState(true);
  const [isSelected, setIsSelected] = React.useState(0);
  const [doneState, setDoneState] = React.useState(0);

  const myRef = React.useRef({});
  React.useEffect(() => {
    const styleObj = {
      backgroundColor: "#f65828",
      borderColor: "#ff7133",
      borderWidth: 1,
      borderRadius: 40,
    }; //@ts-ignore

    myRef.current.setNativeProps({
      style: styleObj,
    });
  }, [myRef]);

  const stepHandler = () => {
    doneState !== 3
      ? setDoneState((doneState) => setDoneState(doneState + 1))
      : setDoneState((doneState) => setDoneState(0));
  };
  return (
    <AppScreen>
      {/* header */}
      {doneState !== 3 ? (
        <VStack justifyContent="space-between" h="100%">
          <HStack space={3} mt={5} justifyContent="center">
            <Center h="2" w="20" bg={`#f65828`} rounded="md" />
            <Center
              h="2"
              w="20"
              bg={doneState == 1 || doneState == 2 ? `#f65828` : "#e6e6e6"}
              rounded="md"
            />
            <Center
              h="2"
              w="20"
              bg={doneState == 2 ? `#f65828` : "#e6e6e6"}
              rounded="md"
            />
          </HStack>

          {/* <View> */}
          {doneState === 0 ? (
            <Center mt={20}>
              <Heading>Select Gender</Heading>
              <Text
                fontSize="md"
                color="#8a8a8a"
                mt={5}
                px={5}
                w="90%"
                textAlign="center"
              >
                Calories & Stride Length Calculator Need it
              </Text>
            </Center>
          ) : doneState === 1 ? (
            <Center mt={20}>
              <Heading>My Profile</Heading>
              <Text
                fontSize="md"
                color="#8a8a8a"
                mt={5}
                px={5}
                w="90%"
                textAlign="center"
              >
                To ensure the accuracity, please input your accurate
                information, we never share this data with any third party.
              </Text>
            </Center>
          ) : (
            <Center mt={20}>
              <Heading>Select Training Plan</Heading>
              <Text
                fontSize="md"
                color="#8a8a8a"
                mt={5}
                px={5}
                w="90%"
                textAlign="center"
              >
                You can change it anytime you can.
              </Text>
            </Center>
          )}

          {/* header */}

          {/* Body */}
          {doneState === 0 ? (
            <Center>
              <HStack space={5} justifyContent="space-evenly">
                <VStack>
                  <Avatar
                    alignSelf="center"
                    bg="amber.500"
                    style={{
                      borderColor: "#ff7133",
                      borderWidth: 3,
                    }}
                    size="lg"
                    source={{
                      uri: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
                    }}
                  >
                    Health 1
                  </Avatar>
                  <Text fontSize="md" bold textAlign="center">
                    Female
                  </Text>
                </VStack>
                <VStack ml={5}>
                  <Avatar
                    alignSelf="center"
                    bg="amber.500"
                    size="lg"
                    source={{
                      uri: "data:image/jpeg;base64,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",
                    }}
                  >
                    Health 1
                  </Avatar>
                  <Text fontSize="md" bold textAlign="center">
                    Female
                  </Text>
                </VStack>
              </HStack>
            </Center>
          ) : doneState === 1 ? (
            <Center>
              <VStack space={5} justifyContent="space-evenly">
                <InputModal />
                <InputModalW />
              </VStack>
            </Center>
          ) : (
            <Center>
              <VStack space={5} justifyContent="space-evenly">
                <PressedItem title="BEGINEER" isSelected={isSelected} />
                <PressedItem title="INTERMEDIATE" isSelected={isSelected} />
                <PressedItem title="ADVANCED" isSelected={isSelected} />
              </VStack>
            </Center>
          )}
          {/* Body */}
          {/* </View> */}
          {/* Footer  */}
          <Center>
            {doneState == 2 ? (
              <Button
                ref={myRef}
                size="sm"
                rounded="xl"
                w="50%"
                colorScheme="secondary"
                onPress={stepHandler}
              >
                <Text fontSize="md" color="#fff" textAlign="center">
                  Done
                </Text>
              </Button>
            ) : (
              <Button
                ref={myRef}
                size="sm"
                rounded="xl"
                w="50%"
                colorScheme="secondary"
                onPress={stepHandler}
              >
                <Text fontSize="md" color="#fff" textAlign="center">
                  Next Step
                </Text>
              </Button>
            )}
          </Center>
          {/* Footer  */}
        </VStack>
      ) : (
        <RightScreen setIsHomescreen={setIsHomescreen} />
      )}
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    marginTop: 10,
    color: "#fff",
  },
});
