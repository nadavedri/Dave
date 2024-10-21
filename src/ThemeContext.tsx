import React, { createContext, useState, useContext } from 'react';
import { MD3LightTheme, MD3DarkTheme, PaperProvider } from 'react-native-paper';
import merge from 'deepmerge';

const CustomLightTheme = merge(MD3LightTheme, {
  colors: {
    primary: '#0BC1E7',
    secondary: '#03dac4',
    background: '#0BC1E7',
    surface: '#FCFFFD',
    onBackground: '#23252F',
    accent: '#03dac4',
    disabled: '#f2f2f2',
    placeholder: '#a3a3a3',
    notification: '#f50057',
  },
});
const CustomDarkTheme = merge(MD3DarkTheme, {
  colors: {
    primary: '#202649',
    secondary: '#363b5b',
    background: '#202649',
    surface: '#323333',
    onBackground: '#D0D2DC',
    accent: '#03dac4',
    disabled: '#f2f2f2',
    placeholder: '#a3a3a3',
    notification: '#f50057',
  },
});

const ThemeContext = createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const theme = isDarkTheme ? CustomDarkTheme : CustomLightTheme;

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      <PaperProvider theme={theme}>{children}</PaperProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
