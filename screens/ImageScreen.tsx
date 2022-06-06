import React from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, View} from 'react-native';

interface ImageScreenProps {}

const image = [
  {
    id: 1,
    title: 'Image 1',
    imageLink:
      'https://images.unsplash.com/photo-1654124803057-a07f6323a147?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    title: 'Image 2',
    imageLink:
      'https://images.unsplash.com/photo-1654124803057-a07f6323a147?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    title: 'Image 3',
    imageLink:
      'https://images.unsplash.com/photo-1654124803057-a07f6323a147?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 4,
    title: 'Image 4',
    imageLink:
      'https://images.unsplash.com/photo-1654124803057-a07f6323a147?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 5,
    title: 'Image 5',
    imageLink:
      'https://images.unsplash.com/photo-1654124803057-a07f6323a147?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=80',
  },
];

const {width, height} = Dimensions.get('window');

export const ImageScreen: React.FC<ImageScreenProps> = () => {
  return (
    <ScrollView>
      {image.map(item => (
        <View key={item.id} style={styles.imageContainer}>
          <Image
            style={styles.image}
            resizeMode="contain"
            resizeMethod="resize"
            source={{uri: item.imageLink}}
          />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    marginVertical: 20,
    width: width * 0.9,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: 1,
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
  },
  image: {
    width: width * 0.9,
    aspectRatio: 1,
  },
});
