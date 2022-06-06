import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ImageScreen} from '../screens/ImageScreen';
import {ImageDetailsScreen} from '../screens/ImageDetailsScreen';

interface StackNavigationProps {}

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
