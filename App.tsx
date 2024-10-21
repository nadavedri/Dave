import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Register, LoginScreen } from './src/screens';
import { DrawerNavigator } from './src/navigators';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from './src/ThemeContext';

const Stack = createNativeStackNavigator();

export const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="MainApp" component={DrawerNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
