import { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
  Profile: undefined;
};
export type ProfileScreenProps = StackScreenProps<
  RootStackParamList,
  'Profile'
> & {
  isDarkTheme: boolean;
  toggleTheme: () => void;
};
