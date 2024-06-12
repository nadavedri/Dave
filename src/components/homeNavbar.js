import React from 'react';
import { Appbar, IconButton, Avatar } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeNavbar = () => {
  const navigation = useNavigation();

  return (
    <Appbar.Header style={styles.navbar}>
      <IconButton
        icon="menu"
        size={30}
        onPress={() => navigation.openDrawer()}
        iconColor="white"
        style={styles.icon}
      />
      <View style={styles.avatarContainer}>
        <Avatar.Icon size={40} icon="folder" style={styles.avatar} />
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
  avatarContainer: {
    backgroundColor: 'transparent',
  },
  avatar: {
    backgroundColor: 'transparent',
  },
});

export default HomeNavbar;
