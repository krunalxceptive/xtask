import * as React from 'react';
import { Text, View } from 'react-native';
import { Button } from '@react-navigation/elements';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import MyTabs from './BottomTab';

const Stack = createStackNavigator();

function MyStack() {
  return (
  
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="BottomTabs" component={MyTabs} />
    </Stack.Navigator>  
  );
}

export default MyStack


