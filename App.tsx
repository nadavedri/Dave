import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Register, LoginScreen, AppendDive, DivingMap } from "./src/screens";
import { PaperProvider } from "react-native-paper";
import React, { useState } from "react";

const Stack = createNativeStackNavigator();

export const App = () => {

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="DivingMap" component={DivingMap} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="MainApp" component={DrawerNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};
export default App;
