import React from "react";
import { createDrawerNavigator }
  from '@react-navigation/drawer';
import { NavigationContainer }
  from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import { Register, LoginScreen, AppendDive } from "./src/screens";
// import DivingMap from "./src/screens/DivingMap";
import { PaperProvider } from "react-native-paper";
const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();
export const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
      {/* <Stack.Navigator screenOptions={{ headerShown: false }}> */}

          <Drawer.Navigator initialRouteName="Home" >
          <Drawer.Screen name="LoginScreen" component={LoginScreen} />
          <Drawer.Screen name="Register"
            component={Register} />
          <Drawer.Screen name="AppendDive" component={AppendDive} />

          {/* <Drawer.Screen name="MapScreen" component={DivingMap} /> */}
        </Drawer.Navigator>
        {/* </Stack.Navigator> */}


      </NavigationContainer>
    </PaperProvider>
  );
};
export default App;
