import { View, Text } from 'react-native';
import React from 'react';
import MyStack from './src/Navigation/StackNav';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
      <NavigationContainer>  
        <MyStack />  
      </NavigationContainer>   
  );
};
 
export default App;
