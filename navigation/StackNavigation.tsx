import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ImageScreen} from '../screens/ImageScreen';
import {ImageDetailsScreen} from '../screens/ImageDetailsScreen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

interface StackNavigationProps {}

type RootStackParamList = {
  ImageScreen: any;
  ImageDetailsScreen:
    | {
        imageLink: string;
        imageTitle: string;
        imagePlace: {
          x: number;
          y: number;
          width: number;
          height: number;
          pageX: number;
          pageY: number;
        };
      }
    | undefined;
};

export type Props = NativeStackScreenProps<RootStackParamList>;

const Stack = createStackNavigator();

export const StackNavigation: React.FC<StackNavigationProps> = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ImageScreen" component={ImageScreen} />
      <Stack.Screen
        // options={() => {
        //   return {
        //     animationEnabled: false,
        //   };
        // }}
        name="ImageDetailsScreen"
        component={ImageDetailsScreen}
      />
    </Stack.Navigator>
  );
};
