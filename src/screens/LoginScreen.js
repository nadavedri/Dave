import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { auth } from '../firebaseConfig'
import DaveInput from '../components/DaveInput'
import { signIn } from '../configuration/configurationText'
import { lockIcon, mailIcon } from '../../public/images/images'


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
  const imagesInput = {id: "Vector", d: "M19.2308 0H0.769231C0.565218 0 0.369561 0.0790178 0.225302 0.21967C0.0810437 0.360322 0 0.551088 0 0.75V13.5C0 13.8978 0.162087 14.2794 0.450605 14.5607C0.739122 14.842 1.13044 15 1.53846 15H18.4615C18.8696 15 19.2609 14.842 19.5494 14.5607C19.8379 14.2794 20 13.8978 20 13.5V0.75C20 0.551088 19.919 0.360322 19.7747 0.21967C19.6304 0.0790178 19.4348 0 19.2308 0ZM10 7.98281L2.74712 1.5H17.2529L10 7.98281ZM7.18365 7.5L1.53846 12.5447V2.45531L7.18365 7.5ZM8.32212 8.51719L9.47596 9.55312C9.61788 9.68014 9.80351 9.75062 9.99615 9.75062C10.1888 9.75062 10.3744 9.68014 10.5163 9.55312L11.6702 8.51719L17.2471 13.5H2.74712L8.32212 8.51719ZM12.8163 7.5L18.4615 2.45438V12.5456L12.8163 7.5Z", fill: "#231F20"}
  return (
    <KeyboardAvoidingView
      style={styles.container}
    
    >
    <View style={styles.header}>
    <Text style={styles.title}>hello!</Text>
    </View>
    <View style={styles.contentContainer} >
      <View style={styles.inputContainer}>
      <DaveInput
        placeholder="E-Mail"
        leftImage={lockIcon}
        onChangeText={text => setEmail(text)}
        imagePath = {imagesInput}
        // value={email}
        />

      {/* <DaveInput
        placeholder="Password"
        leftImage= {lockIcon}
        rightImage= {mailIcon}
        onChangeText={text => setPassword(text)}
        imagePath = {imagesInput}
        
        // value={password} 
        /> */}
        
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
    width: '100%',
  },
  contentContainer:{
    display:'flex',
    marginTop: 100,
    alignItems: 'center',
  },
  header:{
    
    flex:1,
    justifyContent: 'spaceBeteenֶ',
    alignItems: 'center',
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
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: 10
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