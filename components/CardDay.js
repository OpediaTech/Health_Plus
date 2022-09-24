import { StyleSheet, View } from "react-native";
import React from "react";
import {
  AspectRatio,
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Text,
  Stack,
} from "native-base";

const CardDay = () => {
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

  return (
    <View>
      {/* Days one card  */}
      <Box mt={20} alignItems="center">
        <Button
          ref={myRef}
          size="sm"
          rounded="xl"
          w="30%"
          backgroundColor="#71EA7E"
        >
          <Text fontSize="md" color="#fff" textAlign="center">
            Done
          </Text>
        </Button>
        <Box
          maxW="80"
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1"
          _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700",
          }}
          _web={{
            shadow: 2,
            borderWidth: 0,
          }}
          _light={{
            backgroundColor: "gray.50",
          }}
        >
          <Box></Box>
          <Stack p="4" space={3}>
            <Stack space={2} alignItems="center">
              <Heading size="xl" ml="-1">
                Day 1
              </Heading>
              <Text
                fontSize="xs"
                _light={{
                  color: "violet.500",
                }}
                _dark={{
                  color: "violet.400",
                }}
                fontWeight="500"
                ml="-0.5"
                mt="-1"
              >
                The Silicon Valley of India.
              </Text>
            </Stack>

            {/* icons */}
            <HStack space={3} justifyContent="center">
              <Center h="20" w="20" bg="#2AD352" rounded="md" shadow={3}>
                <Heading color="white">18:00</Heading>
                <Text color="white">Walking</Text>
              </Center>
              <Center h="20" w="20" bg="#71EA7E" rounded="md" shadow={3}>
                <Heading color="white">8:00</Heading>
                <Text color="white">Running</Text>
              </Center>
              <Center h="20" w="20" bg="#2AD352" rounded="md" shadow={3}>
                <Heading color="white">26:00</Heading>
                <Text color="white">Total</Text>
              </Center>
            </HStack>
            {/* icons */}
          </Stack>
          <Box mt={20} mb={5} alignItems="center">
            <Button
              ref={myRef}
              size="sm"
              rounded="xl"
              w="70%"
              backgroundColor="#71EA7E"
            >
              <Text fontSize="md" color="#fff" textAlign="center">
                Repeat
              </Text>
            </Button>
          </Box>
        </Box>
      </Box>
    </View>
  );
};

export default CardDay;

const styles = StyleSheet.create({});
