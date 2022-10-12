import React from "react";
import { Box } from "native-base";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
const AppScreen = ({ children, full = false }) => {
  return (
    <Box
      flex="1"
      style={full ? styles.FullContainer : styles.container}
      safeArea
    >
      {children}
    </Box>

    // <Box flex="1" safeArea>
    //   {children}
    // </Box>
  );
};

export default AppScreen;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    marginBottom: 100,
  },
  FullContainer: {
    width: "100%",
    alignSelf: "center",
    backgroundColor: "#22A940",
  },
});
