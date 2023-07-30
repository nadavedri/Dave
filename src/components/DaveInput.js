import { StyleSheet, View, TextInput } from 'react-native'
import React from 'react'


const DaveInput = props => {
  return (
    <View>
        {/* <Image source={require(props.rightImage)} />  */}
        {/* <Image source={require('.\public\images\mail.png')} /> */}
        <TextInput
          placeholder={props.placeholder}
          value={props.value}
          onChangeText={props.onchange}
          style={styles.input}
          secureTextEntry
        />
    </View>
  )
}

export default DaveInput
const styles = StyleSheet.create({ 
    input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
})