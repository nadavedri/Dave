import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';

export const BottomAddDive = () => {
    return (
        <View style={styles.container}>
            <View style={styles.circleContainer}>
                <View style={styles.circle}>
                    <IconButton icon="plus" size={40} iconColor="white" />
                </View>
                <Text style={styles.homePageText}>press the + to add a new dive</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -5 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
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
        marginTop: 16,
        color: 'darkblue',
        fontSize: 16,
    },
});

