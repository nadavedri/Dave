import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Register, LoginScreen } from "./src/screens";
import { DrawerNavigator } from "./src/navigators";
import { NavigationContainer, DefaultTheme, DarkTheme as NavigationDarkTheme } from '@react-navigation/native';
import { MD3LightTheme, MD3DarkTheme, PaperProvider } from 'react-native-paper';
import { ThemeProvider, useThemeContext } from "./src/ThemeContext";

const Stack = createNativeStackNavigator();

export const App = () => {
  const { isDarkTheme } = useThemeContext();

  const combinedTheme = isDarkTheme
    ? { ...MD3DarkTheme, ...NavigationDarkTheme }
    : { ...MD3LightTheme, ...DefaultTheme };
  return (
    <ThemeProvider>

<PaperProvider theme={combinedTheme}>
<NavigationContainer theme={combinedTheme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="MainApp" component={DrawerNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
    </ThemeProvider>
  );
};
export default App;
