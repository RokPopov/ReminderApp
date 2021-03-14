import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Formik } from 'formik';
import InputComponent from '../components/InputComponent.js';
import SubmitButton from '../components/SubmitButton.js'

export default function RegisterScreen() {

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.view}>
      <Formik
        initialValues={{ name: '', email: '', password: '', confirmPassword: ''}}
        onSubmit={(values) => console.log(values)}
      >
        { ({ handleChange, handleSubmit }) =>  (
          <>
      <InputComponent
        icon='user'
        size={23}
        numberOfLines={1}
        keyboardType="default"
        onChange={handleChange("name")}
        placeholder="Name"
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry={false}
      />
      <InputComponent
        style={styles.uglyHack}
        icon='mail'
        size={23}
        numberOfLines={1}
        keyboardType="email-address"
        onChange={handleChange("email")}
        placeholder="Email"
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry={false}
      />
      <InputComponent
        icon='lock'
        size={25}
        numberOfLines={1}
        keyboardType="visible-password"
        onChange={handleChange("password")}
        secureTextEntry
        placeholder="Password"
        autoCapitalize='none'
        autoCorrect={false} 
        textContentType='password'  /* -> only works on ios -> user can fill in the pwd from KeyChain */

      />
      <InputComponent
        icon='lock'
        size={25}
        numberOfLines={1}
        keyboardType="visible-password"
        onChange={handleChange("confirmPassword")}
        secureTextEntry
        placeholder="Confirm Password"
        autoCapitalize='none'
        autoCorrect={false} 
        textContentType='password'  /* -> only works on ios -> user can fill in the pwd from KeyChain */

    />
      <View style={styles.button}>
      <SubmitButton
        onPress={handleSubmit}
        title='register'
      />
      </View>
      </>
        )}
      </Formik>
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




