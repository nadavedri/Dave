import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Platform,
} from 'react-native';
import MailIcon from '../../public/icons/mail.svg';
import PlusPerson from '../../public/icons/plus-person.svg';
import LockIcon from '../../public/icons/lock.svg';
import ArrowIcon from '../../public/icons/arrow.svg';
import {DaveInput} from '../components';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ScreenNavigation, Screens, signIn } from '../../constants';

export const Register = () => {
  const { navigate } = useNavigation<ScreenNavigation>();
  const [fulName, setFulName] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secondPassword, setSecondPassword] = useState('');

  const handleSignUp = () => {
    console.log('Email:', email);
    console.log('Password:', password);

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate(Screens.Home);
      })
      .catch((error) => {
        console.error('Error during signup:', error);
        alert(`Sign up failed: ${error.message}`);
      });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
    >
      <Text style={styles.title}>CREATE ACCOUNT</Text>
      <View style={styles.inputs}>
        <DaveInput
          placeholder="Full Name"
          onChangeText={(text: string) => setFulName(text)}
          Icon={PlusPerson}
          isSecure={false}
        />

        <DaveInput
          placeholder="E-Mail"
          onChangeText={(text: string) => setEmail(text)}
          Icon={MailIcon}
          isSecure={false}
        />

        <DaveInput
          placeholder="Password"
          onChangeText={(text: string) => setPassword(text)}
          Icon={LockIcon}
          isSecure={true}
        />

        <DaveInput
          placeholder="Confirm Password"
          onChangeText={(text: string) => setSecondPassword(text)}
          Icon={LockIcon}
          isSecure={true}
        />

        <TouchableOpacity
          style={styles.ButtonContainer}
          onPress={() => handleSignUp()}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
          <ArrowIcon />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerContainer}
          onPress={() => navigate(Screens.Login)}
        >
          <Text style={styles.footerButton}>{signIn}</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#0BC1E7',
  },

  title: {
    marginTop: 61,
    marginBottom: 28,
    fontFamily: 'PoetsenOne',
    fontWeight: '400',
    fontSize: 39,
    lineHeight: 46.8,
    alignSelf: 'center',
    color: '#FFFFFF',
  },

  inputs: {
    display: 'flex',
    alignItems: 'center',
    height: 200,
  },
  ButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 147,
    height: 62,
    marginTop: 45,
    padding: 15,
    backgroundColor: '#163F6B',
    borderRadius: 10,
  },

  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  footerContainer: {
    marginTop: 65,
  },
  footerButton: {
    color: '#163F6B',
    fontWeight: '700',
    fontSize: 16,
  },
});
