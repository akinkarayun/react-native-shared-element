import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface ImageDetailsScreenProps {}

const {width} = Dimensions.get('window');

export const ImageDetailsScreen: React.FC<ImageDetailsScreenProps> = ({
  route,
  navigation,
}: any) => {
  const {params} = route;

  return (
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        resizeMode="contain"
        resizeMethod="resize"
        source={{uri: params.params}}
      />
      <Text style={styles.text}>{params.imageTitle}</Text>

      <TouchableOpacity
        style={{alignSelf: 'flex-start', height: 50}}
        onPress={() => navigation.goBack()}>
        <Text style={styles.text}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(255, 87, 97, 0.6)',
  },
  image: {
    height: 200,
    width: width,
    borderWidth: 1,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 20,
    width: 100,
    height: 30,
    textAlign: 'center',
    position: 'absolute',
    color: 'white',
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    left: 20,
    top: 20,
    borderRadius: 10,
    borderWidth: 1,
  },
});
