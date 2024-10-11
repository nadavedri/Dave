import React from 'react';
import { Appbar, IconButton } from 'react-native-paper';
import { View, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DaveLogo from '../assets/icons/davelogo.png';
type IHomeNavbar={
  setIsDrawerOpen:(bool:boolean)=>void,
}
export const HomeNavbar = ({setIsDrawerOpen}:IHomeNavbar) => {
  const { navigate } = useNavigation();

  return (
    <Appbar.Header style={styles.navbar}>
      <IconButton
        icon="menu"
        size={30}
        onPress={(bool) => setIsDrawerOpen(!bool)}
        iconColor="white"
        style={styles.icon}
      />
      <View style={styles.logoContainer}>
        <Image source={DaveLogo} style={styles.logo} />
      </View>
      <IconButton
        icon="plus"
        size={30}
        onPress={() => alert('Plus button clicked!')}
        iconColor="white"
        style={styles.icon}
      />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  icon: {
    backgroundColor: 'transparent',
  },
  logoContainer: {
    backgroundColor: 'transparent',
  },
  logo: {
    backgroundColor: 'transparent',
    width: 80,
    height: 80,
  },
});
