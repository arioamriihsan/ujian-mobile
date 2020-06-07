import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Feed, Detail } from '../screens';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator initialRouteName="Feed" headerMode="none">
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};