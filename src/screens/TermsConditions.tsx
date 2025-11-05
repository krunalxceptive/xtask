import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import HeaderBack from '../components/HeaderBack';

const TermsConditions = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <HeaderBack title="Terms & Conditions" />

      {/* WebView Section */}
      <WebView
        source={{ uri: 'https://www.termsfeed.com/live/your-terms-url' }} // replace with your actual link
        style={styles.webview}
      />
    </View> 
  );
};

export default TermsConditions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  webview: {
    flex: 1,
  },
});
