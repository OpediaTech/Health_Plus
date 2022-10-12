import { StyleSheet, Button, Text, Image } from "react-native";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Running from "./Running";
import { NavigationContainer } from "@react-navigation/native";
import { Heading, View } from "native-base";
import WeekDay2 from "./WeekDay2";
import WalkScreen from "./WalkScreen";
import RunnScreen from "./RunnScreen";
import ReportScreen from "./ReportScreen";
// import { Button } from "native-base";

const Tab = createBottomTabNavigator();

function LogoTitle() {
  return <Heading>Running</Heading>;
}
function WeekTitle() {
  return <Heading size="md">Week 1 - Day 2</Heading>;
}

const TabReport = () => {
  return (
    <NavigationContainer>
      {/* <Text>TabHome</Text> */}
      <Tab.Navigator>
        <Tab.Screen
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
        <Tab.Screen
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
        <Tab.Screen
          name="walk"
          component={WalkScreen}
          options={{
            headerTitle: (props) => <Text></Text>,
          }}
        />
        <Tab.Screen
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
        <Tab.Screen
          name="report"
          component={ReportScreen}
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
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabReport;

const styles = StyleSheet.create({});
