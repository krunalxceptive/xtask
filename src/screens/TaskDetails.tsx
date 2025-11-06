import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Modal,
  Pressable,
} from 'react-native';
import HeaderBack from '../components/HeaderBack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { colors } from '../colors/colors';
import { useNavigation } from '@react-navigation/native';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fonts } from '../font/fonts';

const TaskDetails = () => {
  const [selectedTab, setSelectedTab] = useState('Comments');
  const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
      const [profileImage, setProfileImage] = useState(
        require('../assets/images/doc.png'),
      );  

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
    <SafeAreaView style={{ flex: 1 }} edges={['bottom']}>
      <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor: colors.background }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      >
        <View style={styles.container}>
          <HeaderBack title="Task Details" />

          <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{ paddingBottom: 100 }}
          >
            {/* Task Card */}
            <View style={styles.taskCard}>
              <View style={styles.taskTop}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.taskTitle}>xs loyalti</Text>
                  <Text style={styles.taskDate}>28 Dec 2024 , 10:44 AM</Text>
                  <Text style={styles.taskSubText}>xs loyalti</Text>
                </View>

                <View style={{ marginRight: 12 }}>
                  <View style={styles.statusBadge}>
                    <Text style={styles.statusText}>Pending</Text>
                  </View>

                  <View
                    style={{
                      paddingVertical: 5,
                      paddingHorizontal: 12,
                      borderRadius: 8,
                      marginTop: 8,
                    }}
                  >
                    <Text
                      style={{
                        color: colors.gray,
                        fontSize: 13,
                        fontFamily: fonts.giloryMedium,
                        textAlign: 'center',
                      }}
                    >
                      Complete
                    </Text>
                  </View>
                </View>

                <View style={styles.iconRow}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('UpdateTask')}
                  >
                    <Icon name="pencil" size={24} color={colors.primary} />
                  </TouchableOpacity>

                  <TouchableOpacity style={{ marginTop: 12 }}>
                    <Icon name="delete" size={24} color={colors.primary} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* Tabs */}
            <View style={styles.tabsWrapper}>
              {['Comments', 'File', 'Team'].map(tab => (
                <TouchableOpacity
                  activeOpacity={0.7}
                  key={tab}
                  style={styles.tabItem}
                  onPress={() => setSelectedTab(tab)}
                >
                  <Text
                    style={[
                      styles.tabText,
                      selectedTab === tab && styles.tabActiveText,
                    ]}
                  >
                    {tab}
                  </Text>
                  {selectedTab === tab && <View style={styles.tabUnderline} />}
                </TouchableOpacity>
              ))}
            </View>

            {/* Comments Section */}
            {selectedTab === 'Comments' && (
              <View style={styles.commentSection}>
                <Text style={styles.commentTitle}>Comments (1)</Text>

                <View style={styles.commentCard}>
                  <View style={styles.commentHeader}>
                    <View
                      style={{ flexDirection: 'row', alignItems: 'center' }}
                    >
                      <Image
                        source={{
                          uri: 'https://i.pravatar.cc/150?img=3',
                        }}
                        style={styles.avatar}
                      />
                      <View>
                        <Text style={styles.commentName}>Hardik</Text>
                        <Text style={styles.commentRole}>CEO</Text>
                      </View>
                    </View>
                    <Text style={styles.commentTime}>28 days ago</Text>
                  </View>
                  <Text style={styles.commentBody}>ok</Text>
                </View>
              </View>
            )}

            {selectedTab === 'Team' && (
              <View style={styles.commentSection}>
                <Text style={styles.commentTitle}>Team Member (1)</Text>

                <View style={styles.commentCard}>
                  <View style={styles.commentHeader}>
                    <View
                      style={{ flexDirection: 'row', alignItems: 'center' }}
                    >
                      <Image
                        source={{
                          uri: 'https://i.pravatar.cc/150?img=3',
                        }}
                        style={styles.avatar}
                      />
                      <View>
                        <Text style={styles.commentName}>Avani</Text>
                        <Text style={styles.commentRole}>
                          Android Developer
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            )}

            {selectedTab === 'File' && (
              <View style={styles.commentSection}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <Text style={styles.commentTitle}>Attachment (1 file)</Text>

                  <TouchableOpacity onPress={() => setModalVisible(true)} activeOpacity={0.7}>
                    <View style={{ flexDirection: 'row' }}>
                      <Entypo
                        name="circle-with-plus" 
                        size={18}
                        color={colors.primary}
                      />
                      <Text
                        style={{
                          fontSize: 14,
                          paddingLeft: 5,
                          fontFamily: fonts.gilorySemibold,
                          color: colors.primary,
                          marginBottom: 10,
                        }}
                      >
                        Attach new
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>

                <View style={styles.commentCard}>
                  <View style={styles.commentHeader}>
                    <View
                      style={{ flexDirection: 'row', alignItems: 'center' }}
                    >
                      <Image
                        source={profileImage}
                        style={{ 
                          width: 90,
                          height: 50,
                          marginRight: 10,
               
                        }}
                      /> 
                      <View>
                        <Text style={styles.commentName}>image.jpg</Text>
                        <Text style={styles.commentRole}>
                          6 Nov 2025, 10:02 AM
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            )}
          </ScrollView>

          {/* Bottom Comment Input */}
          {selectedTab === 'Comments' && (
            <View style={styles.commentInputContainer}>
              <TextInput
                placeholder="Write comment..."
                placeholderTextColor="#A0A0A0"
                style={styles.commentInput}
                multiline
              />
              <TouchableOpacity style={styles.sendButton}>
                <Icon name="send" size={24} color="#5E35B1" />
              </TouchableOpacity>
            </View>
          )}
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


      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default TaskDetails;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F6F6F8',
  },
  container: {
    flex: 1,
    backgroundColor: '#F6F6F8',
  },
  taskCard: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 16,
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  taskTop: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  taskTitle: {
    fontFamily: fonts.gilorySemibold,
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
  },
  taskDate: {
    fontFamily: fonts.giloryMedium,
    fontSize: 13,
    color: '#9E9E9E',
    marginTop: 4,
  },
  taskSubText: {
    fontFamily: fonts.giloryMedium,
    fontSize: 13,
    color: '#9E9E9E',
    marginTop: 2,
  },
  statusBadge: {
    backgroundColor: '#43A047',
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  statusText: {
    color: '#fff',
    fontSize: 13,
    fontFamily: fonts.giloryMedium,
    textAlign: 'center',
  },
  iconRow: {
    alignSelf: 'center',
  },
  tabsWrapper: {
    flexDirection: 'row',
    backgroundColor: '#F4EFFC',
    marginTop: 20,
    paddingVertical: 14,
    paddingHorizontal: 30,
    justifyContent: 'space-between',
  },
  tabItem: {
    alignItems: 'center', 
    minWidth: 80
  },
  tabText: {
    fontFamily: fonts.gilorySemibold,
    fontSize: 15,
    color: '#A1A1AA',
    fontWeight: '500',
  },
  tabActiveText: {
    fontFamily: fonts.gilorySemibold,
    color: '#5E35B1',
    fontWeight: '600',
  },
  tabUnderline: {
    width: 40,
    height: 3,
    backgroundColor: '#5E35B1',
    borderRadius: 2,
    marginTop: 8,
  },
  commentSection: {
    marginHorizontal: 16,
    marginTop: 20,
  },
  commentTitle: {
    fontSize: 15,
    fontFamily: fonts.gilorySemibold,
    color: '#000',
    marginBottom: 10,
  },
  commentCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  commentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  avatar: {
    width: 45,
    height: 45,
    marginRight: 10,
    borderRadius: 30,
  },
  commentName: {
    fontFamily: fonts.gilorySemibold,
    fontSize: 15,
    color: '#000',
    fontWeight: '600',
  },
  commentRole: {
    fontFamily: fonts.giloryMedium,
    color: '#9E9E9E',
    fontSize: 13,
  },
  commentTime: {
    fontFamily: fonts.giloryMedium,
    color: '#9E9E9E',
    fontSize: 13,
  },
  commentBody: {
    fontFamily: fonts.giloryMedium,
    fontSize: 14,
    color: '#000',
    marginTop: 10,
  },
  commentInputContainer: {
    marginBottom: 0,
    marginHorizontal: 20,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
    paddingHorizontal: 12,
    paddingVertical: 8,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  commentInput: {
    flex: 1,
    fontSize: 15,
    paddingHorizontal: 10,
    maxHeight: 100,
  },
  sendButton: {
    padding: 6,
  },

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
