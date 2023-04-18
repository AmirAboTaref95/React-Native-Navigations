import { NavigationContainer } from "@react-navigation/native";
import StackNavigations from "./StackNavigations";
import { NativeBaseProvider } from "native-base";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StackNavigations />
        <StatusBar barStyle="dark" />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
