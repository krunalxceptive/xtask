import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import HeaderBack from '../components/HeaderBack';
import { colors } from '../colors/colors';
import CommonBtn from '../components/CommonBtn';
import { fonts } from '../font/fonts';

const AddMannual = () => {
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    password: '',
    designation: '',
  });

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', form);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <HeaderBack title="Add Team" />

      <ScrollView contentContainerStyle={styles.formContainer}>
        {/* Name */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={[styles.input]}
            placeholder="Enter name"
            placeholderTextColor="#BDBDBD"
            value={form.name}
            onChangeText={text => handleChange('name', text)}
          />
        </View>

        {/* Mobile Number */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Mobile Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter mobile no."
            placeholderTextColor="#BDBDBD"
            keyboardType="number-pad"
            value={form.mobile}
            onChangeText={text => handleChange('mobile', text)}
          />
        </View>

        {/* Password */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter password"
            placeholderTextColor="#BDBDBD"
            secureTextEntry
            value={form.password}
            onChangeText={text => handleChange('password', text)}
          />
        </View>

        {/* Designation */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Designation</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter designation"
            placeholderTextColor="#BDBDBD"
            value={form.designation}
            onChangeText={text => handleChange('designation', text)}
          />
        </View>
      </ScrollView>

      {/* Submit Button */}
      <View style={{ marginBottom: 50, marginHorizontal: 20 }}>
        <CommonBtn
          title={'Submit'}
          onPress={() => console.log('Submit Pressed')}
        />
      </View> 
    </View>
  );
};

export default AddMannual;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  formContainer: {
    padding: 20,
    paddingBottom: 100,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontFamily: fonts.gilorySemibold,
    color: '#000',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1.2,
    borderColor: '#AFAFAF',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: '#000',
    backgroundColor: '#fff',
  },
  buttonContainer: {
    position: 'absolute',
    marginHorizontal: 20,
    bottom: 70,
    left: 0,
    right: 0,
    height: 60,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
