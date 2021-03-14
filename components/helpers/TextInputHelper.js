import React, { useState } from 'react';
import { TextInput, View, StyleSheet, ShadowPropTypesIOS } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function TextInputHelper(props) {
const [input, setInput] = useState("")

  return (
    <View style={styles.container}>
      {props.icon && <AntDesign name={props.icon} size={props.size} style={styles.icon} />}
      <TextInput
      autoCapitalize={props.autoCapitalize}
      autoCorrect={props.autoCorrect}
      numberOfLines={props.numberOfLines} 
      style={styles.textInput}
      placeholder={props.placeholder}
      onChange={(text) => setInput(text)}
      keyboardType={props.keyboardType}
      secureTextEntry={props.secureTextEntry}
      textContentType={props.textContentType}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    borderRadius: 40,
    flexDirection: 'row',
    width:'85%',
    marginVertical: '5%',
    backgroundColor: '#f9f9f9',
    padding: '5%',
  },
  icon: {
    color: '#4a4a4a',
    marginRight: 10,
  },
  textInput: {
    borderRadius: 25,
    width:'85%',
    fontSize: 20,
    color: '#4a4a4a'
  }
})