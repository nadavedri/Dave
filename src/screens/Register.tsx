import {
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Platform,
} from "react-native";
import MailIcon from "../../public/icons/mail.svg";
import PlusPerson from "../../public/icons/plus-person.svg";
import LockIcon from "../../public/icons/lock.svg";
import ArrowIcon from "../../public/icons/arrow.svg";
import React, { useState } from "react";
import { signIn } from "../consts";
import { useNavigation } from "@react-navigation/native";
import {
  createUserWithEmailAndPassword
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import { DaveInput } from "../components";

export const Register = () => {
  const { navigate } = useNavigation();
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState("");

  const handleEmailChange = (newEmail: string) => setEmail(newEmail);
  const handlePasswordChange = (newPassword: string) =>
    setPassword(newPassword);

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("AddDive");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }; 

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
      <Text style={styles.title}>CREATE ACCOUNT</Text>

      <View style={styles.inputs}>
        <DaveInput placeholder="Full Name" Icon={PlusPerson} />

        <DaveInput
          placeholder="E-Mail"
          Icon={MailIcon}
          onTextChange={handleEmailChange}
        />

        <DaveInput placeholder="Password" Icon={LockIcon} isSecure={true} />

        <DaveInput
          placeholder="Confirm Password"
          Icon={LockIcon}
          isSecure={true}
          onTextChange={handlePasswordChange}
        />

        <TouchableOpacity
          style={styles.ButtonContainer}
          onPress={() => {
            createUser;
          }}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
          <ArrowIcon />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerContainer}
          onPress={() => navigate("LoginScreen")}
        >
          <Text style={styles.footerButton}>{signIn}</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#0BC1E7",
  },

  title: {
    marginTop: 61,
    marginBottom: 28,
    fontFamily: "PoetsenOne",
    fontWeight: "400",
    fontSize: 39,
    lineHeight: 46.8,
    alignSelf: "center",
    color: "#FFFFFF",
  },

  inputs: {
    display: "flex",
    alignItems: "center",
    height: 200,
  },
  ButtonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: 147,
    height: 62,
    marginTop: 45,
    padding: 15,
    backgroundColor: "#163F6B",
    borderRadius: 10,
  },
  
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  footerContainer:{
    marginTop: 65,
  },
  footerButton: {
    color: "#163F6B",
    fontWeight: "700",
    fontSize: 16,
  },
});
