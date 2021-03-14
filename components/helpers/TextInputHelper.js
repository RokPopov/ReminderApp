import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

export default function TextInputHelper(props) {
const [input, setInput] = useState("")

  return (
    <View style={styles.view}>
      <TextInput
      numberOfLines={props.numberOfLines} 
      style={styles.textInput}
      placeholder={props.placeholder}
      onChange={(text) => setInput(text)}
      keyboardType={props.keyboardType}
      secureTextEntry={props.secureTextEntry}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  view: {
    marginTop: '30%',
    alignItems: 'center',
  },
  textInput: {
    borderColor: '#000',
    borderBottomWidth: 2,
    marginBottom: 0,
    maxWidth:'50%'
  }
})