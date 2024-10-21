import React from 'react';
import { AppendDive, DivingMap, ProfileScreen } from '../screens';
import DaveLogo from '../assets/icons/davelogo.png';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { IconButton } from 'react-native-paper';
import { View, Image } from 'react-native';
import 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => (
  <Drawer.Navigator
    initialRouteName="AppendDive"
    screenOptions={{
      headerShown: true,
      headerStyle: {
        backgroundColor: '#0BC1E7',
      },
      headerTintColor: '#fff',
      headerTitleAlign: 'center',
      headerTitle: () => (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}
        >
          <Image
            source={DaveLogo}
            style={{
              width: 60,
              height: 60,
            }}
          />
        </View>
      ),
      headerRight: () => (
        <IconButton
          icon="plus"
          size={30}
          onPress={() => alert('Plus button clicked!')}
          iconColor="white"
        />
      ),
    }}
  >
    <Drawer.Screen name="AppendDive" component={AppendDive} />
    <Drawer.Screen name="DivingMap" component={DivingMap} />
    <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
  </Drawer.Navigator>
);
