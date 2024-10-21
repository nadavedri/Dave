import React from 'react';
import { Text, TextProps } from 'react-native';
import { useTheme } from 'react-native-paper';

export const ThemedText = (props: TextProps) => {
  const theme = useTheme();
  return (
    <Text
      {...props}
      style={[{ color: theme.colors.onBackground }, props.style]}
    />
  );
};
