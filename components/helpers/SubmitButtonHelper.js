import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function SubmitButtonHelper(props) {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress} >
      <Text style={styles.text}>{props.title}</Text> 
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#686868",
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '70%',
    padding: '5%',
    marginVertical: '10%'
  },
  text: {
    color: '#f9f9f9',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
})
