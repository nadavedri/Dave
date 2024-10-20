import React from 'react';
import { StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DivingMap } from '../screens';
import { BottomAddDive } from './BottomAddDive';

const Tab = createBottomTabNavigator();

export const Home = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name={'Home'} component={BottomAddDive}></Tab.Screen>
      <Tab.Screen name={'Add'} component={DivingMap}></Tab.Screen>
      <Tab.Screen name={'Map'} component={DivingMap}></Tab.Screen>
      <Tab.Screen name={'Profile'} component={DivingMap}></Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({

});
