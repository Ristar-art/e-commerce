import React from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Image, Text } from 'react-native';

const image = {
  uri: 'https://images.unsplash.com/photo-1556005693-00fff02f134c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNocmlzdGlhbml0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
};

export default function Black() {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.container}>
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
  // Styles for Rectangular Component 3
  rectangularComponent3: {
    width: '80%',
    backgroundColor: 'transparent',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
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
