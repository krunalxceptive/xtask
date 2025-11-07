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
import Icon from 'react-native-vector-icons/Feather'; 
import { colors } from '../colors/colors';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import { fonts } from '../font/fonts'; 
import { scale } from 'react-native-size-matters';
 
const ProfileScreen = () => {  
  const navigation = useNavigation();
  return ( 
    <View style={styles.container}>
      {/* Gradient Header */}
     <Header title={'Profile'}/>   
 
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      > 
        <View
          style={{ 
            marginHorizontal: scale(15), 
            marginTop: scale(15), 
            flexDirection: 'row',
            alignItems: 'center',
          }} 
        >
          <View style={{ height: scale(55), width: scale(55) }}>
            <Image
              source={require('../assets/images/user-icons.jpg')}
              style={styles.avatar} 
            />
          </View> 

          <View style={{paddingLeft: 8}}>
            <Text style={{fontFamily: fonts.gilorySemibold, fontSize: scale(15)}}>Hardik</Text>
             <Text style={{fontFamily: fonts.giloryMedium, fontSize: scale(13), color: colors.gray}}>CEO</Text>
          </View>
        </View>

        {/* Options */}
        <View style={styles.optionContainer}>
          <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('EditProfile')} >
            <View style={styles.optionLeft}> 
              <Icon name="edit-3" size={20} color="#000" />
              <Text style={styles.optionText}>Edit profile</Text>
            </View>
            <Icon name="chevron-right" size={scale(20)} color="#000" />
          </TouchableOpacity>


          <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('TermsConditions')} >
            <View style={styles.optionLeft}>
              <Icon name="file-text" size={20} color="#000" />
              <Text style={styles.optionText}>Terms & condition</Text>
            </View>
            <Icon name="chevron-right" size={scale(20)} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('PrivacyScreen')}> 
            <View style={styles.optionLeft}>
              <Icon name="shield" size={20} color="#000" />
              <Text style={styles.optionText}>Privacy policy</Text>
            </View>
            <Icon name="chevron-right" size={scale(20)} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Login')} style={[styles.option, { borderBottomWidth: 0 }]}>
            <View style={styles.optionLeft}>
              <Icon name="log-out" size={scale(20)} color="#f44336" />
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
    backgroundColor: colors.background,
  },
  avatar: {
    width: scale(55),
    height: scale(55),
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
    fontSize: scale(14),
    color: '#000',
    marginLeft: 10,
    fontFamily: fonts.gilorySemibold,
  },
});
