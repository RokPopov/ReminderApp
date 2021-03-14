import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import TextInputHelper from './helpers/TextInputHelper.js';



export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.screen}>
      <View>
      <TextInputHelper
        icon='mail'
        size={23}
        numberOfLines={1}
        keyboardType="email-address"
        onChange={(text) => setEmail(text)}
        secureTextEntry={false}
        placeholder="Enter Email"
      />
      <TextInputHelper
        icon='lock'
        size={25}
        numberOfLines={1}
        keyboardType="visible-password"
        onChange={(text) => setPassword(text)}
        secureTextEntry={true}
        placeholder="Enter Password"        
      />
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
  },
})

