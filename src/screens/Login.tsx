import React, { useEffect, useState } from 'react';
import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { DaveInput } from '../components';
import MailIcon from '../../public/icons/mail.svg';
import LockIcon from '../../public/icons/lock.svg';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ScreenNavigation, Screens, SIGN_UP, SIGN_UP_MESSAGE, } from '../../constants';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { navigate, replace } = useNavigation<ScreenNavigation>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      replace(Screens.Home);
    } catch (error) {
      console.log('probably an unregistered user')
      alert(`it seems you dont have an account lets create one :)`);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
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
          onPress={() => navigate(Screens.Register)}
        >
          <Text style={styles.footerButton}>{SIGN_UP_MESSAGE}</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
    flex: 1,
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
