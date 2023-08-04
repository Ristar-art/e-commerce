import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from '../screens/signUpScreen';
import Merch from '../screens/merch';
import LogIn from '../screens/logIn';
import Home from '../screens/home';
import Cancel from '../screens/cancel';
import Success from '../screens/success';




const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
  
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="LogIn" component={LogIn} options={{ headerShown: false }} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Merch" component={Merch} options={{ headerShown: false }} />
        <Stack.Screen name="Success" component={Success} options={{ headerShown: false }} />
        <Stack.Screen name="Cancel" component={Cancel} options={{ headerShown: false }} />
      </Stack.Navigator>

  );
};

export default AppNavigator;