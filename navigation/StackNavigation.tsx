import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ImageScreen} from '../screens/ImageScreen';
import {ImageDetailsScreen} from '../screens/ImageDetailsScreen';

interface StackNavigationProps {}

const Stack = createStackNavigator();

export const StackNavigation: React.FC<StackNavigationProps> = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ImageScreen" component={ImageScreen} />
      <Stack.Screen name="ImageDetailsScreen" component={ImageDetailsScreen} />
    </Stack.Navigator>
  );
};
