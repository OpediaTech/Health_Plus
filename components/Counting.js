import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Text, HStack, Heading } from "native-base";
import Walk from "../screens/Walk";

const Counting = () => {
  const [CountNumber, setCountNumber] = useState(3);
  const [CountEnd, setCountEnd] = useState(false);

  useEffect(() => {
    CountNumber !== 0
      ? setTimeout(() => {
          setCountNumber((CountNumber) => setCountNumber(CountNumber - 1));
        }, 1000)
      : setCountEnd(true);
  }, [CountNumber]);

  return (
    <>
      {CountEnd ? (
        <Walk />
      ) : (
        <View style={styles.Countingconter}>
          <HStack justifyContent="center" alignItems="center" h="100%">
            <Heading size="4xl" fontSize={200} color="#fff">
              {CountNumber}
            </Heading>
          </HStack>
        </View>
      )}
    </>
  );
};

export default Counting;

const styles = StyleSheet.create({
  Countingconter: {
    height: "100%",
    backgroundColor: "#2AD352",
  },
});
