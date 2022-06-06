import React, {useEffect} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, {
  createAnimatedPropAdapter,
  FadeIn,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

interface ImageDetailsScreenProps {}

const {width} = Dimensions.get('window');

export const ImageDetailsScreen: React.FC<ImageDetailsScreenProps> = ({
  route,
  navigation,
}: any) => {
  const {imageLink, imageTitle, imagePlace} = route.params;

  console.log(imagePlace);
  const animatedValue = useSharedValue(0);

  useEffect(() => {
    animatedValue.value = 0;
    animatedValue.value = withTiming(1, {duration: 500});
  }, []);

  const imageContainerStyle = useAnimatedStyle(
    () => ({
      position: 'absolute',
      top: interpolate(animatedValue.value, [0, 1], [imagePlace.pageY, 0]),
      left: interpolate(animatedValue.value, [0, 1], [imagePlace.pageX, 0]),
      width: interpolate(
        animatedValue.value,
        [0, 1],
        [imagePlace.width, width],
      ),
      height: interpolate(
        animatedValue.value,
        [0, 1],
        [imagePlace.height, 200],
      ),
    }),
    [],
  );

  return (
    <View style={styles.imageContainer}>
      <Animated.View
        // entering={FadeIn}
        style={[styles.image, imageContainerStyle]}>
        <Image
          style={styles.image}
          resizeMode="contain"
          resizeMethod="resize"
          source={{uri: imageLink}}
        />
        <Text style={styles.text}>{imageTitle}</Text>

        <TouchableOpacity
          style={{alignSelf: 'flex-start', height: 50}}
          onPress={() => navigation.goBack()}>
          <Text style={styles.text}>Back</Text>
        </TouchableOpacity>
      </Animated.View>
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
