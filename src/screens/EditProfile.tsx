import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Modal,
  Pressable,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HeaderBack from '../components/HeaderBack';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import CommonBtn from '../components/CommonBtn';
import { colors } from '../colors/colors';
import { fonts } from '../font/fonts';
 
const EditProfile = () => {
  const [name, setName] = useState('Hardik');
  const [mobile] = useState('8000049953');
  const [email, setEmail] = useState('Hardik@gmail.com');
  const [profileImage, setProfileImage] = useState(
    require('../assets/images/splash.png'),
  );
  const [modalVisible, setModalVisible] = useState(false);

  // open camera
  const handleCamera = () => {
    setModalVisible(false);
    launchCamera({ mediaType: 'photo', saveToPhotos: true }, response => {
      if (response.didCancel || response.errorCode) return;
      if (response.assets && response.assets[0]?.uri) {
        setProfileImage({ uri: response.assets[0].uri });
      }
    });
  };

  // open gallery
  const handleGallery = () => {
    setModalVisible(false);
    launchImageLibrary({ mediaType: 'photo' }, response => {
      if (response.didCancel || response.errorCode) return;
      if (response.assets && response.assets[0]?.uri) {
        setProfileImage({ uri: response.assets[0].uri });
      }
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <HeaderBack title="Edit Profile" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {/* Profile Image Section */}
        <View style={styles.profileContainer}>
          <Image source={profileImage} style={styles.profileImage} />
          <TouchableOpacity
            style={styles.cameraButton}
            onPress={() => setModalVisible(true)}
          >
            <Ionicons name="camera" size={18} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Input Fields */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>User Name</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Enter name"
            placeholderTextColor="#888"
          />

          <Text style={styles.label}>Mobile Number</Text>
          <View style={styles.disabledInput}>
            <Text style={styles.disabledText}>{mobile}</Text>
          </View>

          <Text style={styles.label}>Email address</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter email"
            placeholderTextColor="#888"
            keyboardType="email-address"
          />
        </View>

        {/* Submit Button */}
      </ScrollView>

      <View style={{ marginBottom: 50, marginHorizontal: 20 }}>
        <CommonBtn title={'Submit'} onPress={() => console.log('Submit')} />
      </View>

      {/* Bottom Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <Pressable
          style={styles.modalBackground}
          onPress={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Change profile Photo</Text>

            <TouchableOpacity style={styles.modalOption} onPress={handleCamera}>
              <Ionicons name="camera-outline" size={22} color="#000" />
              <Text style={styles.modalOptionText}>Camera</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.modalOption}
              onPress={handleGallery}
            >
              <Ionicons name="image-outline" size={22} color="#000" />
              <Text style={styles.modalOptionText}>Gallery</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>

    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  scrollContainer: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  cameraButton: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 6,
    elevation: 5,
  },
  inputContainer: {
    width: '90%',
  },
  label: {
    fontFamily: fonts.gilorySemibold,
    fontSize: 14,
    color: '#000',
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 15,
    marginBottom: 20,
    color: '#000',
    fontWeight: '500',
  },
  disabledInput: {
    backgroundColor: '#e6e6e6',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 15,
    marginBottom: 20,
  },
  disabledText: {
    color: '#555',
    fontWeight: '600',
  },
  submitButton: {
    width: '90%',
    marginTop: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  gradientButton: {
    paddingVertical: 14,
    alignItems: 'center',
    borderRadius: 10,
  },
  submitText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  // MODAL STYLES
  modalBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalContainer: {
    backgroundColor: '#fefefe',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 25,
    paddingTop: 20,
    paddingBottom: 30,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
    marginBottom: 20,
  },
  modalOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    gap: 10,
  },
  modalOptionText: {
    fontSize: 15,
    color: '#000',
    fontWeight: '500',
  },
  modalCancel: {
    marginTop: 15,
    alignItems: 'center',
  },
  modalCancelText: {
    color: '#9c27b0',
    fontSize: 16,
    fontWeight: '600',
  },
});
