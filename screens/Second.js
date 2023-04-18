import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button } from "react-native";
import { Text, SafeAreaView } from "react-native";

const Second = () => {
  const navigaion = useNavigation();
  return (
    <SafeAreaView>
      <Text>This is Second Screen</Text>
      <Button onPress={() => navigaion.navigate("Modal")} title="Open Modal!" />
    </SafeAreaView>
  );
};

export default Second;
