import { StyleSheet, Button, Text, Image } from "react-native";
import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Running from "./Running";
import { NavigationContainer } from "@react-navigation/native";
import { Heading, View } from "native-base";
import WeekDay2 from "./WeekDay2";
import WalkScreen from "./WalkScreen";
import RunnScreen from "./RunnScreen";
// import { Button } from "native-base";

const Stack = createStackNavigator();

function LogoTitle() {
  return <Heading>Running</Heading>;
}
function WeekTitle() {
  return <Heading size="md">Week 1 - Day 2</Heading>;
}

const StackHome = () => {
  return (
    <NavigationContainer>
      {/* <Text>StackHome</Text> */}
      <Stack.Navigator>
        <Stack.Screen
          name="running"
          component={Running}
          options={{
            headerTitle: (props) => <LogoTitle {...props} />,
            headerRight: () => (
              <View>
                <Text>1</Text>
                <Text>2</Text>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="Day2"
          component={WeekDay2}
          options={{
            headerTitle: (props) => <WeekTitle {...props} />,
            headerRight: () => (
              <View>
                <Text>1</Text>
                <Text>2</Text>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="walk"
          component={WalkScreen}
          options={{
            headerTitle: (props) => <Text></Text>,
          }}
        />
        <Stack.Screen
          name="run"
          component={RunnScreen}
          options={{
            headerTitle: (props) => <WeekTitle {...props} />,
            headerRight: () => (
              <View>
                <Text>1</Text>
                <Text>2</Text>
              </View>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackHome;

const styles = StyleSheet.create({});
