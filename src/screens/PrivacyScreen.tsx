import React, { useState } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import HeaderBack from '../components/HeaderBack';

const PrivacyScreen = () => {
  const [loading, setLoading] = useState(true);

  return (
    <View style={styles.container}>
      {/* Header */}
      <HeaderBack title="Privacy Policy" />

      {/* WebView Section */}
      <View style={{ flex: 1 }}>
        {loading && (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="#673AB7" />
          </View>
        )}

        <WebView
          source={{ uri: 'https://xceptive.com/privacy-policy/' }}
          style={styles.webview}
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}
        />
      </View>
    </View>
  );
};

export default PrivacyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  webview: {
    flex: 1,
  },
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.6)',
    zIndex: 1,
  },
});
