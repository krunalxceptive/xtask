import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../colors/colors';
import LinearGradient from 'react-native-linear-gradient';
import { fonts } from '../font/fonts';
import { scale } from 'react-native-size-matters';

const CommonBtn = ({title , onPress }) => {
  return (
    <TouchableOpacity
      style={styles.loginButton}
      onPress={() => onPress()} 
      activeOpacity={0.8}
    >
      <LinearGradient
        colors={[colors.primary, colors.secondary]}
        style={styles.buttonGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text style={styles.loginButtonText}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({ 
  loginButton: {
    marginTop: scale(9), 
    marginBottom: scale(16),
    borderRadius: 12,
    overflow: 'hidden', 
    shadowColor: '#8B5FA6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  buttonGradient: {
    paddingVertical: scale(14),
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    fontFamily: fonts.gilorySemibold,
    color: '#FFFFFF',
    fontSize: scale(18), 
    fontWeight: '600',
  },
});

export default CommonBtn;
