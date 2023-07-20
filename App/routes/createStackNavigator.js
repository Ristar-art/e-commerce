import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignUpScreen from '../screens/signUpScreen';
import Merch from '../screens/merch';
import SingIn from '../screens/signIn';
import Home from '../screens/home';
import Red from '../screens/red';
import White from '../screens/white';
import Black from '../screens/black';
import Yellow from '../screens/yellow';




const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
  
      <Stack.Navigator>
         <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="SingIn" component={SingIn} options={{ headerShown: false }} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Merch" component={Merch} options={{ headerShown: false }} />
        <Stack.Screen name="Red" component={Red} options={{ headerShown: false }} />
        <Stack.Screen name="White" component={White} options={{ headerShown: false }} />
        <Stack.Screen name="Black" component={Black} options={{ headerShown: false }} />
        <Stack.Screen name="Yellow" component={Yellow} options={{ headerShown: false }} />
      </Stack.Navigator>

  );
};

export default AppNavigator;
