import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';

import UsersScreen from '../screens/PostsScreen';

export type RootStackParamList = {
  Home: undefined;
  Users: undefined;
  Profile: { userId: string };  
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <NavigationIndependentTree>
          <NavigationContainer>
      <Stack.Navigator initialRouteName="Users">
        <Stack.Screen name="Users" component={UsersScreen} options={{headerShown :false}}/>
      </Stack.Navigator>
    </NavigationContainer>
</NavigationIndependentTree>
  );
}
