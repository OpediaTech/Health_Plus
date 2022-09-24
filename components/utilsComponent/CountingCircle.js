import { StyleSheet, Text, View } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";

import React, { useEffect, useState } from "react";
import { Center } from "native-base";

const CountingCircle = ({ isPause }) => {
  const [countNum, setCountNum] = useState(0);

  useEffect(() => {
    isPause && countNum !== 60
      ? setTimeout(() => {
          setCountNum((countNum) => setCountNum(countNum + 1));
        }, 1000)
      : setCountNum(true);
  }, [countNum, isPause]);
  return (
    <View>
      <Center mt={20}>
        <CircularProgress
          value={countNum}
          radius={120}
          maxValue={60}
          progressValueColor={"#ecf0f1"}
          activeStrokeColor={"#fff"}
          title={"KM/H"}
          inActiveStrokeColor={"#9b59b6"}
          inActiveStrokeOpacity={0.5}
          inActiveStrokeWidth={15}
          activeStrokeWidth={30}
          titleColor={"white"}
          titleStyle={{ fontWeight: "bold" }}
        />
        {/* <Center
          borderRadius={100}
          borderColor="#fff"
          borderWidth={10}
          bg="primary.400"
          _text={{
            color: "white",
            fontWeight: "bold",
          }}
          height={200}
          width={{
            base: 200,
            lg: 250,
          }}
        >
          This is the Center
        </Center> */}
      </Center>
    </View>
  );
};

export default CountingCircle;

const styles = StyleSheet.create({});
