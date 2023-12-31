import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { auth } from '../firebase'
import DaveInput from '../components/DaveInput'
import { signIn } from '../configuration/configurationText'


const LoginScreen = () => {
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')

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
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
    <View style={styles.contentContainer} >

    <Text style={styles.title}>hello!</Text>
      <View style={styles.inputContainer}>
      <DaveInput
        placeholder="E-Mail"
        // leftImage="public\images\mail.png" 
        onChangeText={text => setEmail(text)}
        // value={email}
        />

      <DaveInput
        placeholder="Password"
        // leftImage="public\images\mail.png" 
        // rightImage="public\images\mail.png" 
        onChangeText={text => setPassword(text)}
        // value={password} 
        />
        
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          // onPress={handleLogin}
          style={styles.button}
        >
          <Text style={[styles.buttonText]}>Login</Text>
        </TouchableOpacity>
        </View>
    </View>
     

        <TouchableOpacity style={styles.footer}
          // onPress={handleSignUp}
          >
          <Text style={styles.buttonOutlineText}>{signIn}</Text>
        </TouchableOpacity>
      
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#0BC1E7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer:{
    flex:1,
    marginTop: 100,
    justifyContent: 'center',
    
  },
  title:{   
    marginBottom:20,
    color: 'white',
    fontSize: 48,
    fontWeight: '400',
    textTransform: 'uppercase',
  
    // wordWrap: 'break-word',
  },
  inputContainer: {
    justifyContent: 'space-between',
    width: '200'
  },
  buttonContainer: {
    flex:1,
    width: '60%',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#163F6B',
    padding: 15,
    borderRadius: '10',
    
    },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#163F6B',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#163F6B',
    fontWeight: '700',
    fontSize: 16,
    
  },
  footer:{height: 100,},
})