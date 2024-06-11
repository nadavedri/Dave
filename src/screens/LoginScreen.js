import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import DaveInput from "../components/DaveInput";
import { signIn } from "../configuration/configurationText";
import MailIcon from "../../public/icons/mail.svg";
import LockIcon from "../../public/icons/lock.svg";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import SignUp from "./signUp";

const LoginScreen = () => {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        onChangeLoggedInUser(user.email);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        onChangeLoggedInUser(user.email);
        return <Stack.Screen name="SignUp" component={SignUp} />;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.title}>hello!</Text>
      <View style={styles.inputs}>
        <View style={styles.input}>
          <DaveInput
            placeholder="E-Mail"
            onChangeText={onChangeEmail}
            Icon={MailIcon}
            isSecure={false}
            value={email}
          />
        </View>
        <View style={styles.input}>
          <DaveInput
            placeholder="Password"
            onChangeText={onChangePassword}
            Icon={LockIcon}
            isSecure={true}
            value={password}
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.LoginButtonContainer}
        onPress={() => createUser()}
      >
        <Text style={[styles.buttonText]}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.footer}
        // onPress={handleSignUp}
      >
        <Text style={styles.footerButton}>{signIn}</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0BC1E7",
  },

  title: {
    marginBottom: 20,
    color: "white",
    fontSize: 48,
    fontWeight: "400",
    textTransform: "uppercase",
  },

  inputs: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 30,
    height: 200,
  },

  input: {
    marginBottom: 20,
  },

  LoginButtonContainer: {
    marginTop: 40,
    padding: 15,
    backgroundColor: "#163F6B",
    borderRadius: 10,
  },

  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },

  footer: {
    marginTop: 170,
  },

  footerButton: {
    color: "#163F6B",
    fontWeight: "700",
    fontSize: 16,
  },
});
