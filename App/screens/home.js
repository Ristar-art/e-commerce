import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground, StyleSheet, View, Dimensions } from 'react-native';
import CustomButton from '../components/customButtons/customButtons';
import CustomComponent from '../components/customComponrnts/customComponents';

const { width, height } = Dimensions.get('window');
const image = {  
  uri: 'https://images.pexels.com/photos/5875032/pexels-photo-5875032.jpeg?auto=compress&cs=tinysrgb&w=1600',
};

export default function Home({ navigation }) {
  
  const onSignInPressed = () => {
    // validate user
    navigation.navigate('SingIn');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.main}>        
          <CustomComponent text="support us by buying the merchandise"/>
          <CustomButton text="Get Started" onPress={onSignInPressed} />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    alignItems: 'center',
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    maxWidth: 960,
    marginHorizontal: 'auto',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
