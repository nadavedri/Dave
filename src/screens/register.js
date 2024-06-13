import {
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Platform
} from "react-native";
import MailIcon from "../../public/icons/mail.svg";
import PlusPerson from "../../public/icons/plus-person.svg";
import LockIcon from "../../public/icons/lock.svg";
import ArrowIcon from "../../public/icons/arrow.svg";
import DaveInput from "../components/DaveInput";

const Register = () => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
      <Text style={styles.title}>CREATE ACCOUNT</Text>
      <View style={styles.inputs}>
        <View style={styles.input}>
          <DaveInput
            placeholder="Full Name"
            onChangeText={(text) => setEmail(text)}
            Icon={PlusPerson}
            isSecure={false}
          />
        </View>
        <View style={styles.input}>
          <DaveInput
            placeholder="E-Mail"
            onChangeText={(text) => setEmail(text)}
            Icon={MailIcon}
            isSecure={false}
          />
        </View>
        <View style={styles.input}>
          <DaveInput
            placeholder="Password"
            onChangeText={(text) => setEmail(text)}
            Icon={LockIcon}
            isSecure={true}
          />
        </View>
        <View style={styles.input}>
          <DaveInput
            placeholder="Confirm Password"
            onChangeText={(text) => setEmail(text)}
            Icon={LockIcon}
            isSecure={true}
          />
        </View>
        <TouchableOpacity
          style={styles.ButtonContainer}
          // onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
          <ArrowIcon />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
export default Register;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "start",
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
});
