import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Pressable, Badge, Box, Flex, Text, HStack, Spacer } from "native-base";

const PressedItem = ({ title, isSelected }) => {
  const [itemNo, setItemNo] = useState(0);
  return (
    <View>
      <SinglePresedItem title={title} />
    </View>
  );
};

export default PressedItem;

function SinglePresedItem({ title, isSelected }) {
  return (
    <Box alignItems="center">
      <Pressable minW="80">
        {({ isHovered, isFocused, isPressed }) => {
          return (
            <Box
              bg={
                isPressed
                  ? "#71EA7E"
                  : isHovered
                  ? "red.200"
                  : isSelected === 0
                  ? "red.100"
                  : "white"
              }
              style={{
                transform: [
                  {
                    scale: isPressed ? 0.97 : 1,
                  },
                ],
              }}
              p="4"
              rounded="8"
              shadow={3}
              borderWidth="1"
              borderColor="coolGray.300"
            >
              <HStack alignItems="center">
                <Spacer />
              </HStack>
              <Text
                // color="coolGray.800"
                color={isPressed ? "#fff" : "#000"}
                mt="3"
                fontWeight="medium"
                fontSize="xl"
              >
                {title}
              </Text>
              <Text mt="2" fontSize="sm" color={isPressed ? "#fff" : "#000"}>
                Just Start To Run
              </Text>
            </Box>
          );
        }}
      </Pressable>
    </Box>
  );
}

const styles = StyleSheet.create({});
