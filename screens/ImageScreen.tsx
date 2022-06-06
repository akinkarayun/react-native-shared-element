import React, {useRef} from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

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
      'https://images.unsplash.com/photo-1654448190693-f59b70e5ee3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    title: 'Image 3',
    imageLink:
      'https://images.unsplash.com/photo-1654378550791-5360093aaf31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 4,
    title: 'Image 4',
    imageLink:
      'https://images.unsplash.com/photo-1654448189789-b823e1794844?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 5,
    title: 'Image 5',
    imageLink:
      'https://images.unsplash.com/photo-1654424344395-b806099dcd24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=80',
  },
];

const {width} = Dimensions.get('window');

export const ImageScreen: React.FC<ImageScreenProps> = ({navigation}: any) => {
  const imageRef = useRef<Image>(null);
  const [imagePlace, setImagePlace] = React.useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    pageX: 0,
    pageY: 0,
  });
  const navigateToImageDetails = (imageLink: string, imageTitle: string) => {
    navigation.navigate('ImageDetailsScreen', {
      imageLink,
      imageTitle,
      imagePlace,
    });
    imageRef.current?.measure((x, y, width, height, pageX, pageY) => {
      setImagePlace({x, y, width, height, pageX, pageY});
    });
  };
  return (
    <ScrollView style={{backgroundColor: 'rgba(255, 87, 167, 0.6)'}}>
      {image.map(item => (
        <Pressable
          onPress={() => navigateToImageDetails(item.imageLink, item.title)}
          key={item.id}
          style={styles.imageContainer}>
          <Image
            ref={imageRef}
            style={styles.image}
            resizeMode="contain"
            resizeMethod="resize"
            source={{uri: item.imageLink}}
          />
        </Pressable>
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
    backgroundColor: 'rgba(25, 117, 177, 0.6)',
    borderWidth: 1,
  },
  image: {
    width: width * 0.9,
    aspectRatio: 1,
  },
});
