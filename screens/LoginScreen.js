import React  from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Formik } from 'formik';
import InputComponent from '../components/InputComponent.js';
import SubmitButton from '../components/SubmitButton.js';



export default function LoginScreen() {

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.view}>

      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
      >
        { ({ handleChange, handleSubmit }) =>  (
          <>
          <InputComponent
        label="Email"
        autoCompleteType="email"
        textContentType="emailAddress"
        icon='mail'
        size={23}
        numberOfLines={1}
        keyboardType="email-address"
        onChange={handleChange("email")}      
        placeholder="Enter Email"
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry={false}        
      />
      <InputComponent
        label="Password"
        icon='lock'
        size={25}
        numberOfLines={1}
        keyboardType="visible-password"
        onChange={handleChange("password")}
        secureTextEntry
        placeholder="Enter Password"
        autoCapitalize='none'
        autoCorrect={false} 
        textContentType='password'  /* -> only works on ios -> user can fill in the pwd from KeyChain */
      />
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




