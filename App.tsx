import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Register, LoginScreen } from './src/screens';
import { PaperProvider } from "react-native-paper";
import { DrawerNavigator } from './src/navigators';
import { Screens, Screen } from './constants';

const Stack = createNativeStackNavigator<Screen>();

export const App = () => {

  return ( 
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name={Screens.Login} component={LoginScreen} />
          <Stack.Screen name={Screens.Register} component={Register} />
          <Stack.Screen name={Screens.Home} component={DrawerNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};
export default App;
