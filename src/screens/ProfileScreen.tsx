import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Modal, Switch } from 'react-native';
import { IconButton, Button, useTheme } from 'react-native-paper';
import { useThemeContext } from '../../src/ThemeContext';

export const ProfileScreen = () => {
    const { isDarkTheme, toggleTheme } = useThemeContext();
    const theme = useTheme();
    const [modalVisible, setModalVisible] = useState(false);
    const [allowLocation, setAllowLocation] = useState(true);

    const forgetLocation = () => {
        setAllowLocation(false);
        console.log('Location forgotten');
    };

    const toggleLocationPermission = (value: boolean) => {
        setAllowLocation(value);
        if (!value) forgetLocation();
    };

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <View style={styles.profileSection}>
                <Image source={require('../assets/icons/davelogo.png')} style={styles.profileImage} />
                <IconButton
                    icon="pencil"
                    size={20}
                    onPress={() => alert('Change profile picture')}
                    style={styles.editIcon}
                />
            </View>

            <View style={styles.statsSection}>
                <View style={styles.statBox}>
                    <Text style={[styles.statLabel, { color: theme.colors.onSurface }]}>Dave Buddies</Text>
                    <Text style={[styles.statValue, { color: theme.colors.onSurface }]}>0</Text>
                </View>
                <View style={styles.statBox}>
                    <Text style={[styles.statLabel, { color: theme.colors.onSurface }]}>Daves Made</Text>
                    <Text style={[styles.statValue, { color: theme.colors.onSurface }]}>0</Text>
                </View>
            </View>

            <IconButton
                icon="cog"
                size={30}
                onPress={() => setModalVisible(true)}
                style={styles.settingsIcon}
            />

            <Modal visible={modalVisible} transparent={true} animationType="slide">
                <View style={styles.modalContainer}>
                    <View style={[styles.modalContent, { backgroundColor: theme.colors.surface }]}>
                        <Text style={[styles.modalTitle, { color: theme.colors.onSurface }]}>User Preferences</Text>

                        <View style={styles.preferenceRow}>
                            <Text style={[styles.preferenceLabel, { color: theme.colors.onSurface }]}>Dark Mode</Text>
                            <Switch value={isDarkTheme} onValueChange={toggleTheme} />
                        </View>

                        <View style={styles.preferenceRow}>
                            <Text style={[styles.preferenceLabel, { color: theme.colors.onSurface }]}>Allow Location</Text>
                            <Switch value={allowLocation} onValueChange={toggleLocationPermission} />
                        </View>

                        <Button mode="contained" onPress={() => setModalVisible(false)} style={styles.closeButton}>
                            Close
                        </Button>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    profileSection: {
        alignItems: 'center',
        marginBottom: 30,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
    },
    editIcon: {
        position: 'absolute',
        right: 5,
        bottom: 5,
    },
    statsSection: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    statBox: {
        alignItems: 'center',
    },
    statLabel: {
        fontSize: 16,
    },
    statValue: {
        fontSize: 20,
        fontWeight: 'bold',
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
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: 300,
        padding: 20,
        borderRadius: 10,
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
