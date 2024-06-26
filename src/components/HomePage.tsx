import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';

export const HomePage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.circleContainer}>
                <View style={styles.circle}>
                    <IconButton icon="plus" size={40} iconColor="white" />
                </View>
                <Text style={styles.homePageText}>My name is 123</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleContainer: {
        marginBottom: 200,
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    circle: {
        width: 80,
        height: 80,
        borderRadius: 50,
        backgroundColor: "#0BC1E7",
        justifyContent: 'center',
        alignItems: 'center',
    },
    homePageText: {
        color: 'darkblue',
        fontSize: 16,
        marginTop: 5
    },
});

