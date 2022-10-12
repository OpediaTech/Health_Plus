import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import AppScreen from "../utils/AppScreen";
import TabReport from "./TabReport";
import { Entypo } from "@expo/vector-icons";
import {
  Actionsheet,
  Box,
  Button,
  Center,
  CheckIcon,
  Heading,
  HStack,
  Image,
  Progress,
  ScrollView,
  Select,
  Text,
  useDisclose,
} from "native-base";

const ProfileScreen = () => {
  return (
    <AppScreen full={true}>
      <Report />
    </AppScreen>
  );
};

const Report = () => {
  return (
    <Box>
      <ReportHeader />
      <Box w="95%" my="10">
        <Progress
          bg="lime.500"
          _filledTrack={{
            bg: "coolGray.100",
          }}
          value={75}
          mx="4"
        />
        <Center>
          <Text color="#fff" sixe="lg" mt="2">
            Progress bar
          </Text>
        </Center>
      </Box>
      <ReportSection />
    </Box>
  );
};
const ReportHeader = () => {
  return (
    <HStack mt={10} space={3} justifyContent="space-evenly">
      <Center h="20" w="50%" borderRightWidth={1} borderRightColor="#c0fcd0">
        <Heading color="#fff">0:01</Heading>
        <Text color="#e6e6e6" sixe="md">
          Mile
        </Text>
      </Center>
      <Center h="20" w="50%">
        <Heading color="#fff">0:01</Heading>
        <Text color="#e6e6e6" sixe="md">
          Calories
        </Text>
      </Center>
    </HStack>
  );
};

const ReportSection = () => {
  return (
    <ScrollView pb="150">
      <Box bg="#fff" px={5}>
        <ReportSectionItem
          title="Edit Profile"
          distance="0.00"
          onclick="profile"
          icon={<Entypo name="user" size={30} color="black" />}
        />
        <ReportSectionItem
          title="Level"
          distance="0.00"
          icon={<Entypo name="flash" size={24} color="black" />}
        />
        <ReportSectionItem
          title="Reminder"
          distance="0.00"
          icon={<Entypo name="bell" size={24} color="black" />}
        />
        <ReportSectionItem
          title="Reset Progress"
          distance="0.50"
          icon={<Entypo name="back-in-time" size={24} color="black" />}
        />
        <ReportSectionItem
          title="Step Tracking"
          distance="1.00"
          icon={<Entypo name="fingerprint" size={24} color="black" />}
        />
        <ReportSectionItem
          title="Language Options"
          distance="0.90"
          icon={<Entypo name="flag" size={24} color="black" />}
        />
        <ReportSectionItem
          title="Voice Options"
          distance="0.90"
          icon={<Entypo name="user" size={24} color="black" />}
        />
        <ReportSectionItem
          title="Feedback"
          distance="0.90"
          icon={<Entypo name="bar-graph" size={24} color="black" />}
        />
        <ReportSectionItem
          title="Privacy Policy"
          distance="0.90"
          icon={<Entypo name="user" size={24} color="black" />}
        />
      </Box>
    </ScrollView>
  );
};

const ReportSectionItem = ({ title, distance, icon, onclick }) => {
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <TouchableOpacity onPress={onOpen}>
      <HStack
        borderColor="#e6e6e6"
        bg="#f7f7f7"
        rounded="xl"
        p={1}
        py={1}
        borderWidth="1"
        mt={4}
        space={3}
        justifyContent="space-evenly"
      >
        <Center h="20" bg="#e6e6e6" ml="4" rounded="md" m="2" w="30%">
          {icon}
        </Center>
        <Center h="20" w="70%">
          <Text color="#666" sixe="md">
            {distance}
          </Text>
          <Heading color="#666" sixe="xs">
            {title}
          </Heading>
        </Center>
        {onclick === "profile" ? (
          <Actionsheet isOpen={isOpen} onClose={onClose} hideDragIndicator>
            <Actionsheet.Content borderTopRadius="0">
              <Box w="100%" h={60} px={4} justifyContent="center">
                <Text
                  fontSize="16"
                  color="gray.500"
                  _dark={{
                    color: "gray.300",
                  }}
                >
                  Albums
                </Text>
              </Box>
              <Select
                //   selectedValue={service}
                minWidth="200"
                accessibilityLabel="Choose Service"
                placeholder="Choose Service"
                _selectedItem={{
                  bg: "teal.600",
                  endIcon: <CheckIcon size="5" />,
                }}
                mt={1}
                // onValueChange={(itemValue) => setService(itemValue)}
              >
                {[
                  { label: "UX Research", value: "ux" },
                  { label: "Web Development", value: "web" },
                  { label: "Cross Platform Development", value: "cross" },
                  { label: "UI Designing", value: "ui" },
                  { label: "Backend Development", value: "backend" },
                ].map((item) => (
                  <Select.Item label={item.label} value={item.value} />
                ))}
              </Select>
              <Actionsheet.Item>Delete</Actionsheet.Item>
              <Actionsheet.Item>Share</Actionsheet.Item>
              <Actionsheet.Item>Play</Actionsheet.Item>
              <Actionsheet.Item>Favourite</Actionsheet.Item>
              <Actionsheet.Item>Cancel</Actionsheet.Item>
            </Actionsheet.Content>
          </Actionsheet>
        ) : onclick === "edit" ? (
          <Actionsheet isOpen={isOpen} onClose={onClose} hideDragIndicator>
            <Actionsheet.Content borderTopRadius="0">
              <Box w="100%" h={60} px={4} justifyContent="center">
                <Text
                  fontSize="16"
                  color="gray.500"
                  _dark={{
                    color: "gray.300",
                  }}
                >
                  Albums
                </Text>
              </Box>
              <Actionsheet.Item>Delete</Actionsheet.Item>
              <Actionsheet.Item>Share</Actionsheet.Item>
              <Actionsheet.Item>Play</Actionsheet.Item>
              <Actionsheet.Item>Favourite</Actionsheet.Item>
              <Actionsheet.Item>Cancel</Actionsheet.Item>
            </Actionsheet.Content>
          </Actionsheet>
        ) : null}
      </HStack>
    </TouchableOpacity>
  );
};

export default ProfileScreen;
