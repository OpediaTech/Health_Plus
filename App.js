import * as React from "react";

import HomeScreen from "./screens/Home";
import { NativeBaseProvider, Text } from "native-base";

import Tab from "./components/tab";
import StackHome from "./screens/StackHome";
import ReportScreen from "./screens/ReportScreen";
import ProfileScreen from "./screens/ProfileScreen";

export default function App() {
  const [isHomescreen, setIsHomescreen] = React.useState(false);

  return (
    <NativeBaseProvider>
      {/* <NavigationContainer> */}
      {/* {!isHomescreen ? (
        <HomeScreen setIsHomescreen={setIsHomescreen} />
      ) : (
     
        <StackHome />
      )} */}

      {/* <ReportScreen /> */}
      <ProfileScreen />

      {/* </NavigationContainer> */}
    </NativeBaseProvider>
  );
}
