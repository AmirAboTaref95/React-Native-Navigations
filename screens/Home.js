import { Button } from "native-base";
import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigaion = useNavigation();
  return (
    <SafeAreaView>
      <Text>This is home</Text>
      <Button
        onPress={() => navigaion.navigate("Second-Screen")}
        title="Go to second screen!"
      />
    </SafeAreaView>
  );
};

export default Home;
