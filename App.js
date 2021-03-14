import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginOrRegister from './components/LoginOrRegister.js'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
         initialRouteName="LoginOrRegister"
         screenOptions={{
         headerStyle: {
         backgroundColor: "#080808", 
                    },
         headerTintColor: "#fff",
         headerTitleAlign: "center",
            }}
          >
          {/* we can put as many screens as we want here*/}
          {/*<Stack.Screen name="Welcome" component={WelcomeScreen} />*/}
          <Stack.Screen name="LoginOrRegister" component={LoginOrRegister} />
          </Stack.Navigator>
       </NavigationContainer>
      );
    }


