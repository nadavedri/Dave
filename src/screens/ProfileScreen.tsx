import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, Modal, Switch, View } from 'react-native';
import { IconButton, Button } from 'react-native-paper';
import { useThemeContext } from '../../src/ThemeContext';
import { ThemedText, ThemedView } from '../components';
import { auth } from '../config/firebaseConfig';

export const ProfileScreen = () => {
  const { isDarkTheme, toggleTheme } = useThemeContext();
  const [modalVisible, setModalVisible] = useState(false);
  const [allowLocation, setAllowLocation] = useState(true);
  const [displayName, setDisplayName] = useState<string>('Guest');

  useEffect(() => {
    const user = auth.currentUser;
    if (user && user.displayName) {
      setDisplayName(user.displayName);
    } else {
      console.log('No user is signed in');
    }
  }, []);

  const forgetLocation = () => {
    setAllowLocation(false);
    console.log('Location forgotten');
  };

  const toggleLocationPermission = (value: boolean) => {
    setAllowLocation(value);
    if (!value) forgetLocation();
  };

  return (
    <ThemedView style={styles.container} backgroundType="surface">
      <View style={styles.profileSection}>
        <Image
          source={require('../assets/icons/davelogo.png')}
          style={styles.profileImage}
        />
        <ThemedText style={styles.profileName}>{displayName}</ThemedText>
        <Button
          mode="contained"
          onPress={() => {
            //TODO: add logic
            alert('Edit profile clicked');
          }}
          style={{
            ...styles.editProfileButton,
            backgroundColor: isDarkTheme ? '#363b5b' : '#d2d3da',
          }}
        >
          Edit Profile
        </Button>
      </View>

      <IconButton
        icon="cog"
        size={30}
        onPress={() => setModalVisible(true)}
        style={styles.settingsIcon}
      />

      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <ThemedView style={styles.modalContainer}>
          <ThemedView style={styles.modalContent} backgroundType="secondary">
            <ThemedText style={styles.modalTitle}>User Preferences</ThemedText>

            <ThemedView style={styles.preferenceRow} backgroundType="secondary">
              <ThemedText style={styles.preferenceLabel}>Dark Mode</ThemedText>
              <Switch value={isDarkTheme} onValueChange={toggleTheme} />
            </ThemedView>

            <ThemedView style={styles.preferenceRow} backgroundType="secondary">
              <ThemedText style={styles.preferenceLabel}>
                Allow Location
              </ThemedText>
              <Switch
                value={allowLocation}
                onValueChange={toggleLocationPermission}
              />
            </ThemedView>

            <Button
              mode="contained"
              onPress={() => setModalVisible(false)}
              style={styles.closeButton}
            >
              Close
            </Button>
          </ThemedView>
        </ThemedView>
      </Modal>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  profileSection: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    alignItems: 'center',
    marginBottom: 30,
    position: 'relative',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#000',
  },
  editProfileButton: {
    backgroundColor: '#d2d3da',
    marginTop: 10,
    width: '100%',
    borderRadius: 20,
  },
  settingsIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    padding: 20,
    borderRadius: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  profileName: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  preferenceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  preferenceLabel: {
    fontSize: 16,
  },
  closeButton: {
    marginTop: 20,
  },
});
