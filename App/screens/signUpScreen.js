import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomInput from '../components/customInputs/customInputs';
import CustomButton from '../components/customButtons/customButtons';
import { useNavigation } from '@react-navigation/native'; // Make sure to import this

export default function SignUpScreen() {
  const navigation = useNavigation(); // Use the hook to get the navigation object

  const [name, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const onRegisterPressed = () => {
    navigation.navigate('LogIn'); 
  };

  const onSignInPress = () => {
    navigation.navigate('LogIn'); 
  };

  async function handleRegister(event) {
    event.preventDefault(); // Added missing semicolon
    const response = await fetch('http://localhost:8000/api/signup', {
      method: 'POST', // Added missing comma
      headers: {
        'Content-Type': 'application/json', // Corrected typo 'applivation' to 'application'
      },
      body: JSON.stringify({
        name, 
        email,
        password,
        passwordRepeat,
      }),
    });

    const data = await response.json(); // Corrected typo 'responce' to 'response'
    console.log(data);
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>
        {/* Removed 'form' element as it's not supported in React Native */}
        <View>
          <form onSubmit={handleRegister}>
          <CustomInput
            placeholder="Username"
            value={name}
            setValue={setUsername}
          />
          <CustomInput placeholder="Email" value={email} setValue={setEmail} />
          <CustomInput
            placeholder="Password"
            value={password}
            setValue={setPassword}
            secureTextEntry
          />
          <CustomInput
            placeholder="Repeat Password"
            value={passwordRepeat}
            setValue={setPasswordRepeat}
            secureTextEntry
          />
          <CustomButton text="Register" type="submit" onPress={handleRegister} /> {/* Corrected 'onRegisterPressed' to 'handleRegister' */}
          </form>
        </View>
         
        <CustomButton
          text="Have an account? Sign in"
          onPress={onSignInPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});
