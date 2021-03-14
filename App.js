import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login.js'
import Register from './components/Register.js'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
         initialRouteName="Register"

         screenOptions={{
         headerStyle: {
         backgroundColor: "#686868", 
                    },
         headerTintColor: "#fff",
         headerTitleAlign: "center",
            }}
          >
          {/* we can put as many screens as we want here*/}
          {/*<Stack.Screen name="Welcome" component={WelcomeScreen} />*/}
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          </Stack.Navigator>
       </NavigationContainer>
      );
    }


