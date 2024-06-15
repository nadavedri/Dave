import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { Register, LoginScreen, AddDive } from "./src/screens";
// import DivingMap from "./src/screens/DivingMap";
import { PaperProvider } from "react-native-paper";
import React from "react";

const Stack = createNativeStackNavigator();

export const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="AddDive" component={AddDive} />
          {/* <Stack.Screen name="MapScreen" component={DivingMap} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};
export default App;
