import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Input from '../helpers/Input.js';
import SubmitButton from '../helpers/Button.js'

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.view}>
      <Input
        style={styles.uglyHack}
        icon='user'
        size={23}
        numberOfLines={1}
        keyboardType="default"
        onChange={(text) => setEmail(text)}
        placeholder="Name"
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry={false}
      />
      <Input
        style={styles.uglyHack}
        icon='mail'
        size={23}
        numberOfLines={1}
        keyboardType="email-address"
        onChange={(text) => setEmail(text)}
        placeholder="Email"
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
        placeholder="Password"
        autoCapitalize='none'
        autoCorrect={false} 
        textContentType='password'  /* -> only works on ios -> user can fill in the pwd from KeyChain */

      />
      <Input
        icon='lock'
        size={25}
        numberOfLines={1}
        keyboardType="visible-password"
        onChange={(text) => setPassword(text)}
        secureTextEntry
        placeholder="Confirm Password"
        autoCapitalize='none'
        autoCorrect={false} 
        textContentType='password'  /* -> only works on ios -> user can fill in the pwd from KeyChain */

    />
      <View style={styles.button}>
      <SubmitButton
        onPress={() => console.log('I"m taking a little break')}
        title='register'
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
    marginTop: '15%'
  }
})




