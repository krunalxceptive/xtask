import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather'; // Main icon set
import { colors } from '../colors/colors';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* Gradient Header */}
      <LinearGradient
        colors={['#9c27b0', '#673ab7']}
        style={styles.headerContainer}
      >
        <Text style={styles.headerTitle}>Profile</Text>
      </LinearGradient>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <View
          style={{
            marginHorizontal: 15,
            marginTop: 15,
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <View style={{ height: 60, width: 60 }}>
            <Image
              source={require('../assets/images/user-icon.png')}
              style={styles.avatar} 
            />
          </View> 

          <View style={{paddingLeft: 8}}>
            <Text style={{fontWeight: '600', fontSize: 16}}>Hardik</Text>
             <Text style={{fontWeight: '500', fontSize: 14, color: colors.gray}}>CEO</Text>
          </View>
        </View>

        {/* Options */}
        <View style={styles.optionContainer}>
          <TouchableOpacity style={styles.option}>
            <View style={styles.optionLeft}>
              <Icon name="edit-3" size={20} color="#000" />
              <Text style={styles.optionText}>Edit profile</Text>
            </View>
            <Icon name="chevron-right" size={20} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <View style={styles.optionLeft}>
              <Icon name="file-text" size={20} color="#000" />
              <Text style={styles.optionText}>Terms & condition</Text>
            </View>
            <Icon name="chevron-right" size={20} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <View style={styles.optionLeft}>
              <Icon name="shield" size={20} color="#000" />
              <Text style={styles.optionText}>Privacy policy</Text>
            </View>
            <Icon name="chevron-right" size={20} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.option, { borderBottomWidth: 0 }]}>
            <View style={styles.optionLeft}>
              <Icon name="log-out" size={20} color="#f44336" />
              <Text style={[styles.optionText, { color: '#f44336' }]}>
                Logout
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf7fd',
  },
  headerContainer: {
    height: 110,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 40,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },
  role: {
    fontSize: 14,
    color: '#777',
  },
  optionContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginTop: 24,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 3,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 15,
    color: '#000',
    marginLeft: 10,
    fontWeight: '500',
  },
});
