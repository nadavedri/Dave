import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type Screen = {
    Home: undefined,
    Login: undefined,
    Register: undefined,
} 

export type ScreenNavigation = NativeStackNavigationProp<Screen>;