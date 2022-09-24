import { StyleSheet, View } from "react-native";
import React from "react";
import { Center, Heading, Text, HStack } from "native-base";

const History = () => {
  return (
    <View>
      <HStack mt={10} space={3} justifyContent="center">
        <Center
          h="10"
          w="20"
          pr={5}
          rounded="md"
          borderRightColor="#D9D9D9"
          borderRightWidth={1}
          borderRadius={0}
        >
          <Heading size="xl" color="#fff">
            0.00
          </Heading>
          <Text color="#fff">Mile</Text>
        </Center>
        <Center
          h="10"
          w="20"
          pr={5}
          rounded="md"
          borderRightColor="#D9D9D9"
          borderRightWidth={1}
          borderRadius={0}
        >
          <Heading size="xl" color="#fff">
            0:8
          </Heading>
          <Text color="#fff">min/ml</Text>
        </Center>
        <Center h="10" w="20" pr={5} rounded="md">
          <Heading size="xl" color="#fff">
            1.8
          </Heading>
          <Text color="#fff">Kcal</Text>
        </Center>
      </HStack>
    </View>
  );
};

export default History;

const styles = StyleSheet.create({});
