import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../colors/colors';

const Header = ({ title }: any) => {
  return (
    <LinearGradient
      colors={[colors.primary, colors.secondary]}
      start={{ x: 0, y: 0 }} // Left side
      end={{ x: 1, y: 0 }} // Right side
      style={styles.headerContainer}
    >
      <Text style={styles.headerTitle}>{title}</Text> 
    </LinearGradient> 
  ); 
};
   
export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    height: 110,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20,
    // borderBottomLeftRadius: 15,
    // borderBottomRightRadius: 15,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
  },
});
