import React, { useEffect, useState } from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { DaveInput } from '../components';
import MailIcon from '../../public/icons/mail.svg';
import LockIcon from '../../public/icons/lock.svg';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ScreenNavigation, Screens, signUp } from '../../constants';

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { navigate } = useNavigation<ScreenNavigation>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      if (user) {
      }
    });

    return unsubscribe;
  }, []);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('Login');
      })
      .catch((error) => {
        console.error('Error during login:', error);
        alert(`Log in failed: ${error.message}`);
      });
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.title}>hello!</Text>
      <View style={styles.inputs}>
        <DaveInput
          placeholder="E-Mail"
          onChangeText={setEmail}
          Icon={MailIcon}
          isSecure={false}
        />
        <DaveInput
          placeholder="Password"
          onChangeText={setPassword}
          Icon={LockIcon}
          isSecure={true}
        />
      </View>

      <TouchableOpacity
        style={styles.LoginButtonContainer}
        onPress={() => handleLogin()}
      >
        <Text style={[styles.buttonText]}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.footer}
        onPress={() => navigate('Register')}
      >
        <Text style={styles.footerButton}>{signUp}</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0BC1E7',
  },

  title: {
    marginBottom: 20,
    color: 'white',
    fontSize: 48,
    fontWeight: '400',
    textTransform: 'uppercase',
  },

  inputs: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 30,
    height: 200,
  },

  LoginButtonContainer: {
    marginTop: 40,
    padding: 15,
    backgroundColor: '#163F6B',
    borderRadius: 10,
  },

  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },

  footer: {
    marginTop: 170,
  },

  footerButton: {
    color: '#163F6B',
    fontWeight: '700',
    fontSize: 16,
  },
});
