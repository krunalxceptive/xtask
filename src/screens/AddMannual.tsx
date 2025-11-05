import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import HeaderBack from "../components/HeaderBack"; 
import { colors } from "../colors/colors";
 
const AddMannual = () => {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    password: "",
    designation: "",
  });

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", form);
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
            style={[styles.input, { borderColor: "#6E38D5" }]}
            placeholder="Enter name"
            placeholderTextColor="#BDBDBD"
            value={form.name}
            onChangeText={(text) => handleChange("name", text)}
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
            onChangeText={(text) => handleChange("mobile", text)}
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
            onChangeText={(text) => handleChange("password", text)}
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
            onChangeText={(text) => handleChange("designation", text)}
          />
        </View>
      </ScrollView>

      {/* Submit Button */}
      <LinearGradient
        colors={[colors.primary, colors.secondary]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.buttonContainer}
      >
        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default AddMannual;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
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
    fontWeight: "600",
    color: "#000",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1.2,
    borderColor: "#AFAFAF",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: "#000",
    backgroundColor: "#fff",
  },
  buttonContainer: {
    position: "absolute",
    marginHorizontal: 20,
    bottom: 70,
    left: 0,
    right: 0,
    height: 60,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
