import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Text, FlatList, ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const image = {
  uri: 'https://images.unsplash.com/photo-1556005693-00fff02f134c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNocmlzdGlhbml0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
};

const ProductImage = ({ imageUrl, price }) => {
  return (
    <ImageBackground
      source={{ uri: imageUrl }}
      style={styles.productImage}
      resizeMode="cover" // Change to "cover" for proper image display
    >
      {/* Price Tag */}
      <View style={styles.priceTagContainer}>
        <Text style={styles.priceTag}>{price}</Text>
      </View>
    </ImageBackground>
  );
};

const CircularComponent = () => {
  return (
    <TouchableOpacity style={styles.circularComponent}>
      <Text style={styles.circularComponentText}>Circular</Text>
    </TouchableOpacity>
  );
};

const BuyHere = ({ totalPrice }) => {
  return (
    <View style={styles.containerWithWhiteBackground}>
      {/* Filter */}
      <View style={styles.filter}>
        <TextInput
          style={styles.input}
          placeholder="search"
          placeholderTextColor="#fff"
          textAlign="left" // Move placeholder to the left
        />
      </View>
      {/* Circular Component */}
      <View style={styles.circularComponentContainer}>
        <CircularComponent />
      </View>
      {/* Total Price */}
      <View style={styles.totalPrice}>
       
      </View>
    </View>
  );
};

export default function Merch() {
  const navigation = useNavigation();
  const [images, setImages] = useState([
    { merchandise: 'https://plus.unsplash.com/premium_photo-1678313763247-7f2379b568b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1460&q=80', price: 'R20', key: '1' },
    { merchandise: 'https://images.unsplash.com/photo-1586202690944-7282c12105f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNocmlzdGlhbml0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', price: 'R30', key: '2' },
    // Add more image data if needed
  ]);

  const [totalPrice, setTotalPrice] = useState(0); // State to hold the total price

  const handleColorPress = (color) => {
    // ... (previous code)
  };

  const handleImagePress = (key) => {
    const selectedImage = images.find((item) => item.key === key);
    if (selectedImage) {
      // Convert the price string to a number and add it to the total price
      const priceNumber = parseInt(selectedImage.price.slice(1));
      setTotalPrice((prevTotal) => prevTotal + priceNumber);
    }
  };

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.container}>
      {/* Container Background */}
      <View style={styles.containerBackground}></View>

      {/* Filter */}
      <View style={styles.filter}>
        <TextInput
          style={styles.input}
          placeholder="search"
          placeholderTextColor="#fff"
          textAlign="left" // Move placeholder to the left
        />
      </View>

      {/* BuyHere component */}
      <BuyHere totalPrice={totalPrice} />

      {/* Display Total Price below Filter */}
      <View style={styles.totalPriceContainer}>
        <Text style={styles.totalPriceText}>Total Price: ${totalPrice}</Text>
      </View>

      {/* Product */}
      <ScrollView style={styles.product}>
        <FlatList
          data={images}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleImagePress(item.key)}>
              <View key={item.key} style={styles.productImageContainer}>
                <ProductImage imageUrl={item.merchandise} price={item.price} />
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.key}
        />
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
  },
  containerBackground: {
    backgroundColor: 'white',
    width: '100%',
    top: 0,   
    height: 30,
    zIndex: 2,
    position: 'absolute', // Use "absolute" instead of "fixed" for React Native
  },
  containerWithWhiteBackground: {
    backgroundColor: 'white',
    width: '100%',
    top: 0,   
    height: 300,
    zIndex: 2,
    position: 'absolute', // Use "absolute" instead of "fixed" for React Native
    borderRadius: 10,
  },
  titleText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  filter: {
    position: 'absolute',
    top: 20,
    left: 24,
    width: 200,
    height: 25,
    backgroundColor: 'transparent',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
    zIndex: 3,
  },
  input: {
    color: '#fff',
    fontSize: 16,
    width: '100%',
    height: '100%',
    paddingLeft: 10,
  },
  circularComponentContainer: {
    position: 'absolute',
    top: 70,
    right: 24,
  },
  circularComponent: {
    zIndex: 3,
    position: 'absolute', // Use "absolute" instead of "fixed" for React Native
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    right: 30,
  },
  circularComponentText: {
    color: '#fff',
    fontSize: 16,
  },
  totalPriceContainer: {
    position: 'absolute',
    top: 110,
    left: 24,
    width: 200,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 3,
  },
  totalPriceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  product: {
    width: '80%',
    flex: 1,
    borderRadius: 8,
    overflow: 'hidden',
    marginTop: 300,
    zIndex: 1,
  },
  productImageContainer: {
    marginVertical: 10,    
  },
  productImage: {
    width: '100%',
    aspectRatio: 4 / 3,
    justifyContent: 'flex-end',
  },
  priceTagContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 8,
  },
  priceTag: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
