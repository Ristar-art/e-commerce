import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Text, FlatList, ScrollView, Linking } from 'react-native';
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
      resizeMode="cover"
    >
      {/* Price Tag */}
      <View style={styles.priceTagContainer}>
        <Text style={styles.priceTag}>{price}</Text>
      </View>
    </ImageBackground>
  );
};

const CartIcon = ({ itemCount }) => {
  return (
    <TouchableOpacity style={styles.cartIcon}>
      <Text style={styles.cartIconText}>{itemCount}</Text>
    </TouchableOpacity>
  );
};

const CircularComponent = ({ onPress, itemCount }) => {
  return (
    <TouchableOpacity style={styles.circularComponent} onPress={onPress}>
      <Text style={styles.circularComponentText}>Cart</Text>
      {itemCount > 0 && <CartIcon itemCount={itemCount} />}
    </TouchableOpacity>
  );
};

const BuyHere = ({ totalPrice, itemCount, handleCircularComponentPress }) => {
  return (
    <View style={styles.containerWithWhiteBackground}>
      {/* Filter */}
      <View style={styles.filter}>
        <TextInput
          style={styles.input}
          placeholder="search"
          placeholderTextColor="#fff"
          textAlign="left"
        />
      </View>
      {/* Circular Component */}
      <View style={styles.circularComponentContainer}>
        <CircularComponent onPress={handleCircularComponentPress} itemCount={itemCount} />
      </View>
      {/* Total Price */}
      <View style={styles.totalPrice}></View>
    </View>
  );
};

export default function Merch({ route }) {
  const navigation = useNavigation();
  const [images, setImages] = useState([
    { merchandise: 'https://images.unsplash.com/photo-1627462932730-846d957668a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80', price: 'R20', key: '1' , name:'T-sirt'},
    { merchandise: 'https://th.bing.com/th/id/OIP.yqiIJAftvfs-ygrLl5WLfAHaEm?pid=ImgDet&rs=1', price: 'R30', key: '2', name :'Cap' },
    // Add more image data if needed
  ]);

  const [totalPrice, setTotalPrice] = useState(0); // State to hold the total price
  const [itemCount, setItemCount] = useState(0); // State to hold the cart item count

  const [itemQuantities, setItemQuantities] = useState(
    images.reduce((acc, item) => {
      acc[item.key] = 0;
      return acc;
    }, {})
  );
  const { accessToken } = route.params;
  const handleImagePress = (key) => {
    const selectedImage = images.find((item) => item.key === key);
    if (selectedImage) {
      const priceNumber = parseInt(selectedImage.price.slice(1));
      setTotalPrice((prevTotal) => prevTotal + priceNumber);

      // Update the quantity for the selected item
      setItemQuantities((prevQuantities) => ({
        ...prevQuantities,
        [key]: prevQuantities[key] + 1,
      }));

      // Update the cart item count based on the total quantity of all items
      setItemCount((prevItemCount) => prevItemCount + 1);
    }
  };

  const handleCircularComponentPress = () => {
    const items = images.map((item) => ({
      id: item.key,
      name: item.name,
      quantity: itemQuantities[item.key], // Use the quantity from the state for each item
    }));
  
    //console.log("Items data sent in request:", items); // Add this log statement
  
    fetch("http://localhost:8000/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify({ items }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        Linking.openURL(url);
      })
      .catch((e) => {
        console.error(e.error);
      });
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
          textAlign="left"
        />
      </View>

      {/* BuyHere component */}
      <BuyHere totalPrice={totalPrice} itemCount={itemCount} handleCircularComponentPress={handleCircularComponentPress} />

      {/* Display Total Price below Filter */}
      <View style={styles.totalPriceContainer}>
        <Text style={styles.totalPriceText}>Total Price: R{totalPrice}</Text>
      </View>
      {/* Circular Component */}
      <View style={styles.circularComponentContainer}>
        <CircularComponent onPress={handleCircularComponentPress} itemCount={itemCount} />
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
  cartIcon: {
    position: 'absolute',
    top: -10,
    right: -10,
    backgroundColor: 'red',
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartIconText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  }
});
