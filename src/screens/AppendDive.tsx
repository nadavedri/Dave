import { HomeNavbar, BottomAddDive } from '../components';
import React, { useState } from "react";
import { View, StyleSheet } from 'react-native';

export const AppendDive = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)

  return (
    <View style={styles.container}>
      {isDrawerOpen ?? }
      <View style={styles.topPortion}>
        <HomeNavbar setIsDrawerOpen={setIsDrawerOpen}/>
s      </View>
      <BottomAddDive />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0BC1E7',
  },
  topPortion: {
    height: 200,
  },
  greetingText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'center',
    marginTop: 72,
  },
});
