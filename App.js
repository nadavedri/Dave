import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// import LoginScreen from "./src/screens/LoginScreen";
// import DivingMap from "./src/screens/DivingMap";
import AddDive from "./src/screens/addDive";
import { PaperProvider } from 'react-native-paper';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name="LoginScreen" component={LoginScreen} /> */}
          <Stack.Screen name="addDive" component={AddDive} />
          {/* <Stack.Screen name="MapScreen" component={DivingMap} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({});
