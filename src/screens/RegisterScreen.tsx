
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
  Pressable,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../colors/colors';
import { useNavigation } from '@react-navigation/native';
import CommonBtn from '../components/CommonBtn';
import { fonts } from '../font/fonts';

const RegisterScreen = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [numberOfEmployees, setNumberOfEmployees] = useState('');
  const [purposeOfUse, setPurposeOfUse] = useState('');
  const navigation = useNavigation();

  const handleRegister = () => {
    console.log('Register pressed', {
      mobileNumber,
      email, 
      password,
      numberOfEmployees,
      purposeOfUse,
    });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <StatusBar barStyle="light-content" />

    <TouchableOpacity 
          activeOpacity={0.7}
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require('../assets/images/back.png')}
            style={{ width: 25, height: 25 }}
          />
        </TouchableOpacity>

      {/* Gradient Header in Background */}
      <LinearGradient
        colors={[colors.primary, colors.secondary]}
        style={styles.gradientBackground}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
    
        <View style={styles.header}>
          <Text style={styles.title}>Register</Text>
          <Text style={styles.subtitle}>
            Welcome, Please create your account
          </Text>
        </View>
      </LinearGradient>

      {/* Scrollable Form in Front */}
      <ScrollView
        style={styles.formScroll}
        contentContainerStyle={styles.formScrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.formContainer}>
          <View style={styles.avatarContainer}>
            <Image
              source={require('../assets/images/splash.png')}
              style={{ width: 110, height: 120 }}
            />
          </View>

          {/* Mobile Number */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter Mobile Number"
              placeholderTextColor="#A0A0A0"
              keyboardType="phone-pad"
              value={mobileNumber}
              onChangeText={setMobileNumber}
            />
          </View>

          {/* Email */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter Email Address"
              placeholderTextColor="#A0A0A0"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          {/* Password */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter Password"
              placeholderTextColor="#A0A0A0"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>

          {/* Number of Employees */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter Number Of Employee"
              placeholderTextColor="#A0A0A0"
              keyboardType="numeric"
              value={numberOfEmployees}
              onChangeText={setNumberOfEmployees}
            />
          </View>

          {/* Purpose of Use */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter Purpose Of Use"
              placeholderTextColor="#A0A0A0"
              value={purposeOfUse}
              onChangeText={setPurposeOfUse}
            />
          </View>

            <CommonBtn title={'Register'}  onPress={handleRegister}/>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },

  /** Background Header **/
  gradientBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 300, // taller background for nice effect
    zIndex: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 15,
    zIndex: 10,
  },
  header: {
    alignItems: 'center',
  },
  title: {  
    fontSize: 22,
    fontFamily: fonts.gilorySemibold,
    color: '#FFFFFF',
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: fonts.giloryMedium,
    fontSize: 15,
    color: '#FFFFFF',
    textAlign: 'center',
    opacity: 0.9,
  },

  /** Scrollable Form **/
  formScroll: {
    flex: 1,
    zIndex: 2, // above header
  },
  formScrollContent: {
    paddingTop: 265, // 👈 increased gap so form starts lower
    paddingBottom: 80,
  },
  formContainer: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 40,
  
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 16,
    fontSize: 16,
    color: '#333',
    elevation: 3,
  },
  registerButton: {
    marginTop: 25,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 5,
  },
  buttonGradient: {
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default RegisterScreen;
