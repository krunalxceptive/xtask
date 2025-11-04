
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../colors/colors';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('BottomTabs'); 
  }; 

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Background Gradient Header */}
      <LinearGradient
        colors={[colors.primary, colors.secondary]}
        style={styles.headerBackground}
      >
        <View style={styles.headerContent}>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.subtitle}>
            Welcome, Please login to your account{'\n'}using your mobile number
          </Text>
        </View>
      </LinearGradient>

      {/* Keyboard Avoiding + Scrollable Form */}
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.formContainer}>
            {/* Avatar */}
            <View style={styles.avatarContainer}>
              <Image
                source={require('../assets/images/splash.png')}
                style={{ width: 110, height: 120 }}
              />
            </View>

            {/* Mobile Input */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Enter your mobile number"
                placeholderTextColor="#A0A0A0"
                keyboardType="phone-pad"
                value={mobileNumber}
                onChangeText={setMobileNumber}
              />
            </View>

            {/* Password Input */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Enter password"
                placeholderTextColor="#A0A0A0"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
            </View>

            {/* Login Button */}
            <TouchableOpacity
              style={styles.loginButton}
              onPress={handleLogin}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={[colors.primary, colors.secondary]}
                style={styles.buttonGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Text style={styles.loginButtonText}>Login</Text>
              </LinearGradient>
            </TouchableOpacity>

            {/* Register Button */}
            <TouchableOpacity
              style={styles.registerButton}
              onPress={handleRegister}
              activeOpacity={0.8}
            >
              <Text style={styles.registerButtonText}>Register</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  // Header background stays behind form
  headerBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 300,
    zIndex: 0,
  },
  headerContent: {
    marginTop: 100,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 15,
    color: '#FFFFFF',
    textAlign: 'center',
    opacity: 0.9,
    lineHeight: 22,
  },

  scrollContainer: {
    paddingTop: 280, // Makes form start below header
  },

  formContainer: {
    backgroundColor: '#F5F5F5',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 40,
    zIndex: 10,
  },

  avatarContainer: {
    alignItems: 'center',
    marginBottom: 25,
  },

  inputContainer: {
    marginBottom: 15,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 16,
    fontSize: 16,
    color: '#333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 10,
  },

  loginButton: {
    marginTop: 10,
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#8B5FA6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  buttonGradient: {
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  registerButton: {
    backgroundColor: '#9E9E9E',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    elevation: 3,
  },
  registerButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default LoginScreen;
