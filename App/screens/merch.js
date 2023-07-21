import React, { useEffect } from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Image, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
//import jwt from 'jsonwebtoken' 

const image = {
  uri: 'https://images.unsplash.com/photo-1556005693-00fff02f134c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNocmlzdGlhbml0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
};

export default function Merch() {
  const navigation = useNavigation();
  //  useEffect(()=>{
  //   const token = localStorage.getItem(token)
  //   if(token){
  //     const
  //   }
  //  },[])
  const handleColorPress = (color) => {
    switch (color) {
      case 'red':
        navigation.navigate('Red');
        break;
      case 'white':
        navigation.navigate('White');
        break;
      case 'yellow':
        navigation.navigate('Yellow');
        break;
      case 'black':
        navigation.navigate('Black');
        break;
      default:
        break;
    }
  };

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.container}>
      {/* Rectangular Component 1 */}
      <View style={styles.rectangularComponent1}>
        <TextInput
          style={styles.input}
          placeholder="search"
          placeholderTextColor="#fff"
          textAlign="left" // Move placeholder to the left
        />
      </View>

      {/* Rectangular Component 2 */}
      <View style={styles.squareContainer}>
        <TouchableOpacity
          style={[styles.rectangularComponent2]}
          onPress={() => handleColorPress('red')}
        >
          <Text style={styles.squareTextRed}>Red</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.rectangularComponent2]}
          onPress={() => handleColorPress('white')}
        >
          <Text style={styles.squareTextWhite}>White</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.rectangularComponent2]}
          onPress={() => handleColorPress('yellow')}
        >
          <Text style={styles.squareTextYellow}>Yellow</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.rectangularComponent2]}
          onPress={() => handleColorPress('black')}
        >
          <Text style={styles.squareTextBlack}>Black</Text>
        </TouchableOpacity>
      </View>

      {/* Rectangular Component 3 */}
      <View style={[styles.rectangularComponent3, { flex: 1 }]}>
        <View style={styles.topRectangularContainer}>
          <TouchableOpacity
            style={styles.rectangularComponent4}
            onPress={() => console.log('Rectangular Component 1 pressed!')}
          >
            <ImageBackground
              source={{
                uri:
                  'https://plus.unsplash.com/premium_photo-1678313763247-7f2379b568b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1460&q=80',
              }}
              style={styles.imageBackground}
              resizeMode="cover"
            >
              {/* Price Tag */}
              <Text style={styles.priceTag}>R20</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.rectangularComponent4}
            onPress={() => console.log('Rectangular Component 2 pressed!')}
          >
            <ImageBackground
              source={{
                uri:
                  'https://images.unsplash.com/photo-1591040040008-af09788b2624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNocmlzdGlhbml0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=600',
              }}
              style={styles.imageBackground}
              resizeMode="cover"
            >
              {/* Price Tag */}
              <Text style={styles.priceTag}>R30</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomRectangularContainer}>
          <TouchableOpacity
            style={styles.rectangularComponent4}
            onPress={() => console.log('Rectangular Component 3 pressed!')}
          >
            <ImageBackground
              source={{
                uri:
                  'https://images.unsplash.com/photo-1556005693-00fff02f134c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNocmlzdGlhbml0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
              }}
              style={styles.imageBackground}
              resizeMode="cover"
            >
              {/* Price Tag */}
              <Text style={styles.priceTag}>R25</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.rectangularComponent4}
            onPress={() => console.log('Rectangular Component 4 pressed!')}
          >
            <ImageBackground
              source={{
                uri:
                  'https://images.unsplash.com/photo-1556005693-00fff02f134c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNocmlzdGlhbml0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
              }}
              style={styles.imageBackground}
              resizeMode="cover"
            >
              {/* Price Tag */}
              <Text style={styles.priceTag}>R40</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
  },
  titleText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  // Styles for Rectangular Component 1
  rectangularComponent1: {
    width: 200, // Fixed width
    height: 25, // Fixed height
    backgroundColor: 'transparent',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderWidth: 2, // Add white border
    borderColor: 'white', // White color for the border
  },
  input: {
    color: '#fff',
    fontSize: 16,
    width: '100%',
    height: '100%',
    paddingLeft: 10, // Add left padding to move placeholder to the left
  },
  // Styles for Rectangular Component 2
  rectangularComponent2: {
    flex: 1,
    height: 80, // Adjust the height value as needed
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 1, // Add border to each square
    borderColor: '#fff', // White color for the border
  },
  // Square Text Styles
  squareTextRed: {
    color: 'red',
    fontSize: 16,
  },
  squareTextWhite: {
    color: 'white',
    fontSize: 16,
  },
  squareTextYellow: {
    color: 'yellow',
    fontSize: 16,
  },
  squareTextBlack: {
    color: 'black',
    fontSize: 16,
  },
  // Styles for Rectangular Component 3
  rectangularComponent3: {
    width: '80%',
    backgroundColor: 'transparent',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  // Square Container Styles
  squareContainer: {
    flexDirection: 'row', // Flex horizontally
    justifyContent: 'space-between',
    width: '80%', // Adjust the width as needed
    height: 80, // Match the height of the rectangularComponent2
    marginTop: 10,
  },
  // Rectangular Component 4 Styles
  topRectangularContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    flex: 1,
    marginBottom: 10,
  },
  bottomRectangularContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    flex: 1,
  },
  rectangularComponent4: {
    flex: 1,
    borderRadius: 10,
    margin: 5,
    overflow: 'hidden', // Ensure images don't overflow outside the rectangle
  },
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  priceTag: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
