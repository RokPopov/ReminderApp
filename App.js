import 'react-native-gesture-handler';
import * as React from 'react';
import { Provider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {  useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import LoginScreen from './screens/LoginScreen.js'
import RegisterScreen from './screens/RegisterScreen.js'
import WelcomeScreen from './screens/WelcomeScreen'

const Stack = createStackNavigator();

export default function App() {
  // console.log(useDimensions());
  // console.log(useDeviceOrientation());

  const { landscape } = useDeviceOrientation();  

  return (
    <Provider>
    <NavigationContainer>
      <Stack.Navigator
          marginTop={ landscape ? '100%' : '10%' }
          initialRouteName={WelcomeScreen}
          screenOptions={{
          backgroundColor: '#000',
          headerTintColor: "#c7c7c7",
          headerTitleAlign: "center"
        }}
          >
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          </Stack.Navigator>
       </NavigationContainer>
       </Provider>
      );
    }

  


