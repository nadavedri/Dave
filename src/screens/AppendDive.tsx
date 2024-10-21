import { auth } from '../config/firebaseConfig';
import { BottomAddDive } from '../components';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { ThemedText } from '../components/index';

export const AppendDive = () => {
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
      <View style={styles.topPortion}>
        <ThemedText style={styles.greetingText}>
          hello {email.split('@')[0] || 'Guest'}
        </ThemedText>
      </View>

      <BottomAddDive />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topPortion: {
    height: 200,
  },
  greetingText: {
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'center',
    marginTop: 72,
  },
});
