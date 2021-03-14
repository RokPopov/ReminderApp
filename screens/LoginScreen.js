import React  from 'react';
import { SafeAreaView, StyleSheet, View, TextInput } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import InputComponent from '../components/InputComponent.js';
import SubmitButton from '../components/SubmitButton.js';


const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid Email!').label("Email").required('Required!'),
  password: Yup.string().min(4, 'Too short!').label("Password").required('Required!')
})

export default function LoginScreen() {

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.view}>

      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        { ({ handleChange, handleSubmit, errors }) =>  (
          <>
          <InputComponent
        icon='mail'
        size={23}
        keyboardType="email-address"
        onChangeText={handleChange("email")}      
        placeholder="Enter Email"
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry={false} 
        textContentType='emailAddress'  /* -> only works on ios -> user can fill in the pwd from KeyChain */       
      />
      <TextInput style={{ color: 'red' }}>{errors.email}</TextInput>
      <InputComponent
        icon='lock'
        size={25}
        keyboardType="visible-password"
        onChangeText={handleChange("password")}
        secureTextEntry
        placeholder="Enter Password"
        autoCapitalize='none'
        autoCorrect={false} 
        textContentType='password'  /* -> only works on ios -> user can fill in the pwd from KeyChain */
      />
      <TextInput style={{ color: 'red' }}>{errors.password}</TextInput>
      <View style={styles.button}>
      <SubmitButton
        mode='contained'        
        title='login'
        onPress={handleSubmit}
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
    marginTop: '70%'
  }
})




