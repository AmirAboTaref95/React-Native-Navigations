import React from "react";
import { Home, Modal, Second } from "./screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const StackNavigations = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Group>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Second-Screen" component={Second} />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={Modal} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigations;
