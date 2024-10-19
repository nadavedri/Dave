import { auth } from '../firebaseConfig';
import { BottomAddDive, HomeNavbar } from '../components';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const AddDive = () => {
  const [displayName, setDisaplayName] = useState<string>("Guest");

  useEffect(() => {
    const user = auth.currentUser;
    if (user && user.displayName) {
      setDisaplayName(user.displayName);
    } else {
      console.log('No user is signed in'); // needs logs here 
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topPortion}>
        {/* <HomeNavbar /> */}
        <Text style={styles.greetingText}>hello {displayName}</Text>
      </View>

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
