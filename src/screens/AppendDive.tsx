import { HomeNavbar, BottomAddDive } from '../components';
import React from "react";
import { Text, View, StyleSheet } from 'react-native';


export const AppendDive = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topPortion}>
        <HomeNavbar />
        <Text style={styles.greetingText}>Hello User</Text>
      </View>
      <BottomAddDive />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0BC1E7",
  },
  topPortion: {
    height: 200
  },
  greetingText: {
    color: 'white',
    fontWeight: "bold",
    fontSize: 18,
    alignSelf: 'center',
    marginTop: 72
  },
});
