import React ,{useState} from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import DaveInput from '../components/DaveInput'
import { signIn } from '../configuration/configurationText'
import MailIcon from '../../public/icons/mail.svg'
import LockIcon from '../../public/icons/lock.svg'


const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // const navigation = useNavigation()

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(user => {
  //     if (user) {
  //       navigation.replace("Home")
  //     }
  //   })

  //   return unsubscribe
  // }, [])

  // const handleSignUp = () => {
  //   auth
  //     .createUserWithEmailAndPassword(email, password)
  //     .then(userCredentials => {
  //       const user = userCredentials.user;
  //       console.log('Registered with:', user.email);
  //     })
  //     .catch(error => alert(error.message))
  // }

  // const handleLogin = () => {
  //   auth
  //     .signInWithEmailAndPassword(email, password)
  //     .then(userCredentials => {
  //       const user = userCredentials.user;
  //       console.log('Logged in with:', user.email);
  //     })
  //     .catch(error => alert(error.message))
  // }
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.title}>hello!</Text>
      <View style={styles.inputs}>
        <DaveInput
          placeholder="E-Mail"
          onChangeText={(text) => setEmail(text)}
          Icon={MailIcon}
          isSecure={false}
        />
        <DaveInput
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          Icon={LockIcon}
          isSecure={true}
        />
      </View>

      <TouchableOpacity
        style={styles.LoginButtonContainer}
        // onPress={handleLogin}
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
}

export default LoginScreen

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