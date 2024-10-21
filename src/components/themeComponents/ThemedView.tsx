import React from 'react';
import { View, ViewProps } from 'react-native';
import { useTheme } from 'react-native-paper';

interface ThemedViewProps extends ViewProps {
  backgroundType?: 'secondary' | 'primary' | 'surface';
}
export const ThemedView = ({
  style,
  backgroundType = 'primary',
  ...props
}: ThemedViewProps) => {
  const theme = useTheme();

  return (
    <View
      {...props}
      style={[{ backgroundColor: theme.colors[backgroundType] }, style]}
    />
  );
};
