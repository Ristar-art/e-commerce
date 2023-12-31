import React, { useState } from 'react';
import CustomInputs from "../components/customInputs/customInputs";
import { ImageBackground, StyleSheet, View, Dimensions } from "react-native";
import CustomButton from "../components/customButtons/customButtons";

const { width, height } = Dimensions.get('window');
const image = {
  width: width,
  height: height,
  uri: 'https://images.unsplash.com/photo-1556005693-00fff02f134c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNocmlzdGlhbml0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
};

export default function LogIn({ navigation }) {
  const [name, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSignInPressed = () => {
    // validate user
    navigation.navigate('Merch');
  };

  const onSignUpPress = () => {
    navigation.navigate('SignUpScreen');
  };

  async function handleLogin() {
    const response = await fetch('http://localhost:8000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        password,
      }),
    });

    try {
      const data = await response.json();
      if (data.user) {
        alert('Login successful');
        navigation.navigate('Merch', { accessToken: data.accessToken });
      } else {
        alert('Please check your username and password');
      }
    } catch (error) {
      console.error('Error parsing API response:', error);
      alert('An error occurred while logging in. Please try again later.');
    }
  }

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <View style={styles.main}>
          <CustomInputs placeholder="user name" value={name} setValue={setUsername} />
          <CustomInputs placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true} />
          <CustomButton text="Sign In" onPress={handleLogin} />
          <CustomButton
            text="Don't have an account? Create one"
            onPress={onSignUpPress}
            type="TERTIARY"
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  main: {
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  button: {
    width: 120,
    height: 40,
  },
});
