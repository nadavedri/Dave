import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HomeNavbar from '../components/homeNavbar';
import HomePage from '../components/HomePage';

const AddDive = () => {
    return (
        <View style={styles.container}>
            <HomeNavbar />
            <Text style={styles.greetingText}>Hello User</Text>
            <HomePage />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0BC1E7",
    },
    greetingText: {
        color: 'white',
        fontSize: 16,
        alignSelf: 'center',
        marginTop: 20,
    },
});

export default AddDive;