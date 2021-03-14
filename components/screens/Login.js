import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, View } from 'react-native';
import Input from '../helpers/Input.js';
import SubmitButton from '../helpers/Button.js'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.view}>
      <Input
        icon='mail'
        size={23}
        numberOfLines={1}
        keyboardType="email-address"
        onChange={(text) => setEmail(text)}
        placeholder="Enter Email"
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry={false}
      />
      <Input
        icon='lock'
        size={25}
        numberOfLines={1}
        keyboardType="visible-password"
        onChange={(text) => setPassword(text)}
        secureTextEntry
        placeholder="Enter Password"
        autoCapitalize='none'
        autoCorrect={false} 
        textContentType='password'  /* -> only works on ios -> user can fill in the pwd from KeyChain */

      />
      <View style={styles.button}>
      <SubmitButton        
        onPress={() => console.log('Tap')}
        title='login'
      />
      </View>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    marginVertical: '20%'
  },
  view: {
    alignItems: 'center',
  },
  button: {
    marginTop: '70%'
  }
})




