import 'react-native-gesture-handler';
import * as React from 'react';
import { Provider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {  useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import StyleSheet from 'react-native';
import Login from './components/screens/Login.js'
import Register from './components/screens/Register.js'
import WelcomeScreen from './components/WelcomeScreen'

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
          initialRouteName={Login}
          screenOptions={{
          backgroundColor: '#000',
          headerTintColor: "#c7c7c7",
          headerTitleAlign: "center"
        }}
          >
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          </Stack.Navigator>
       </NavigationContainer>
       </Provider>
      );
    }

  


