import { StyleSheet, FlatList, Text, View } from "react-native";
import React, { useState } from "react";
import { Button, Checkbox, Heading, HStack, Radio, Stack } from "native-base";
import CardDay from "../components/CardDay";

const Running = ({ navigation }) => {
  const [isWweekSet, setIsWweekSet] = useState(0);

  const incomingExpenses = ["week 1", "week 2", "week 3", "week 4", "week 5"];
  const days = [1, 2, 3, 4, 5, 6, 7];

  const renderItem = ({ item, index }) => (
    <View>
      <Button
        onPress={() => {
          setIsWweekSet(index);
          navigation.navigate("Day2");
        }}
        mx={1}
        size="md"
        variant={isWweekSet === index ? "solid" : "subtle"}
        // colorScheme="secondary"
        backgroundColor="#71EA7E"
      >
        {item}
      </Button>
    </View>
  );

  const renderItem1 = ({ item, index }) => (
    <HStack>
      <Button
        onPress={() => {
          setIsWweekSet(index);
        }}
        mx={1}
        width={60}
        size="md"
        borderRadius={10}
        variant={isWweekSet === index ? "solid" : "subtle"}
        backgroundColor="#2AD352"
      >
        {item}
      </Button>
    </HStack>
  );

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={incomingExpenses}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <Text></Text>
        <Heading px={1} mb={3} size="md">
          Days
        </Heading>
        <FlatList
          data={days}
          renderItem={renderItem1}
          keyExtractor={(item) => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <CardDay />
    </View>
  );
};

export default Running;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
  },
});
