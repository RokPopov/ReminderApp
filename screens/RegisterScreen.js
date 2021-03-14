import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import InputComponent from '../components/InputComponent.js';
import SubmitButton from '../components/SubmitButton.js'

const validationSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too short!').max(12, 'Too long!').required('Required!'),
  email: Yup.string().email('Invalid Email!').label("Email").required('Required!'),
  password: Yup.string().min(4, 'Too Short!').label("Password").required('Required!'),
})

export default function RegisterScreen() {

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.view}>
      <Formik
        initialValues={{ name: '', email: '', password: '', confirmPassword: ''}}
        onSubmit={(values) => console.log(values)}
      >
        { ({ handleChange, handleSubmit, errors }) =>  (
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
      <TextInput style={{ color: 'red' }}>{errors.name}</TextInput>
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
      <TextInput style={{ color: 'red' }}>{errors.email}</TextInput>
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
      <TextInput style={{ color: 'red' }}>{errors.password}</TextInput>
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
    <TextInput style={{ color: 'red' }}>{errors.password}</TextInput>
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




