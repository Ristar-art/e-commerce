import React from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Image, Text } from 'react-native'; // <-- Import Text component
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

// Rest of the code remains unchanged


const image = {
  uri: 'https://images.unsplash.com/photo-1556005693-00fff02f134c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNocmlzdGlhbml0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
};

export default function Merch() {
  const navigation = useNavigation();

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
          <TouchableOpacity style={styles.rectangularComponent4}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1556005693-00fff02f134c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNocmlzdGlhbml0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' }} // Replace this with the uploaded image URI
              style={styles.uploadedImage}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.rectangularComponent4}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1556005693-00fff02f134c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNocmlzdGlhbml0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' }} // Replace this with the uploaded image URI
              style={styles.uploadedImage}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.bottomRectangularContainer}>
          <TouchableOpacity style={styles.rectangularComponent4}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1556005693-00fff02f134c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNocmlzdGlhbml0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' }} // Replace this with the uploaded image URI
              style={styles.uploadedImage}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.rectangularComponent4}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1556005693-00fff02f134c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNocmlzdGlhbml0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' }} // Replace this with the uploaded image URI
              style={styles.uploadedImage}
              resizeMode="cover"
            />
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
    backgroundColor: 'orange',
    borderRadius: 10,
    margin: 5,
    overflow: 'hidden', // Ensure images don't overflow outside the rectangle
  },
  uploadedImage: {
    width: '100%',
    height: '100%',
  },
});
