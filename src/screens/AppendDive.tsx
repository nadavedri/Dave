import { auth } from '../firebaseConfig';
import { HomeNavbar, BottomAddDive, DaveDrawer } from '../components';
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from 'react-native';

export const AppendDive = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');

  useEffect(() => {
    const user = auth.currentUser;
    if (user && user.email) {
      setEmail(user.email); 
    } else {
      console.log('No user is signed in');
    }
  }, []);

  return (  
    <View style={styles.container}>
      {isDrawerOpen && <DaveDrawer />}
      <View style={styles.topPortion}>
        <HomeNavbar setIsDrawerOpen={setIsDrawerOpen} />
      <Text style={styles.greetingText}>hello {email.split('@')[0] || 'Guest'}</Text>
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
