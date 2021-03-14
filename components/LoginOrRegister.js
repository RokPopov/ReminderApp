import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import TextInputHelper from './helpers/TextInputHelper.js';



export default function LoginOrRegister() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView>
      <TextInputHelper
        numberOfLines={1}
        keyboardType="email-address"
        onChangeText={setEmail}
        secureTextEntry={false}
        placeholder="Enter Email"
      />
      <TextInputHelper
        numberOfLines={1}
        keyboardType="visible-password"
        onChangeText={setPassword}
        secureTextEntry={true}
        placeholder="Enter Password"
        
      />
    </SafeAreaView>
  );
};




