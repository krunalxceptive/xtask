import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import HeaderBack from '../components/HeaderBack';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../colors/colors';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import CommonBtn from '../components/CommonBtn';
import { fonts } from '../font/fonts';

const AddMember = () => {
  const [selectedMembers, setSelectedMembers] = useState([]); // store multiple selections
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();

  const teamMembers = [
    {
      id: '1',
      name: 'Miral',
      role: 'Manager',
      image: require('../assets/images/user-icons.jpg'),
    },
    {
      id: '2',
      name: 'Avani',
      role: 'Android Developer',
      image: require('../assets/images/user-icons.jpg'),
    },
    {
      id: '3',
      name: 'Hardik',
      role: 'CEO',
      image: require('../assets/images/user-icons.jpg'),
    },
    {
      id: '4',
      name: 'Jaykishan',
      role: 'Android Developer',
      image: require('../assets/images/user-icons.jpg'),
    },
    {
      id: '5',
      name: 'Ajay',
      role: 'IOS Developer',
      image: require('../assets/images/user-icons.jpg'),
    },
  ];

  const filteredMembers = teamMembers.filter(item =>
    item.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  const toggleSelection = memberId => {
    if (selectedMembers.includes(memberId)) {
      // Deselect if already selected
      setSelectedMembers(selectedMembers.filter(id => id !== memberId));
    } else {
      // Add to selected list
      setSelectedMembers([...selectedMembers, memberId]);
    }
  };

  const renderItem = ({ item }) => {
    const isSelected = selectedMembers.includes(item.id);

    return (
      <TouchableOpacity
        style={[
          styles.card,
          isSelected && { borderColor: colors.secondary, borderWidth: 1.5 },
        ]}
        onPress={() => toggleSelection(item.id)}
        activeOpacity={0.8}
      >
        <View style={styles.row}>
          <Image source={item.image} style={styles.avatar} />
          <View>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.role}>{item.role}</Text>
          </View>
        </View>
        {isSelected && (
          <View style={styles.checkCircle}>
            <Icon name="checkmark" size={18} color="#fff" />
          </View>
        )}
      </TouchableOpacity>
    );
  };

  const handleDone = () => {
    const selectedNames = teamMembers
      .filter(m => selectedMembers.includes(m.id))
      .map(m => m.name);
    console.log('Selected Members:', selectedNames);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.primary, colors.secondary]}
        start={{ x: 0, y: 0 }} // Left side
        end={{ x: 1, y: 0 }} // Right side
        style={styles.headerContainer}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View style={styles.headerContent}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.goBack()}
              style={styles.backButton}
            >
              <Ionicons name="arrow-back" size={24} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Add Team Member</Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('AddMannual')}
          >
            <Entypo name="circle-with-plus" size={26} color="#fff" />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <View style={styles.searchContainer}>
        <Icon
          name="search-outline"
          size={20}
          color="#999"
          style={styles.searchIcon}
        />
        <TextInput
          placeholder="Search here"
          placeholderTextColor="#999"
          style={styles.searchInput}
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      <FlatList
        data={filteredMembers}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      />

      <View style={{ marginBottom: 50, marginHorizontal: 20 }}>
        <CommonBtn title={'Done'} onPress={() => console.log('Done Pressed')} />
      </View> 
    </View>
  );
};

export default AddMember;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 12,
    paddingHorizontal: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 3,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 45,
    fontSize: 15,
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 14,
    borderRadius: 16,
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
    marginRight: 12,
  },
  name: {
    fontFamily: fonts.gilorySemibold,
    fontSize: 16,
    color: '#000',
  },
  role: {
    fontFamily: fonts.giloryMedium,
    fontSize: 14,
    color: '#999',
    marginTop: 2,
  },
  checkCircle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  doneButton: {
    backgroundColor: colors.background,
    marginBottom: 50,
    marginHorizontal: 20,
    marginTop: 10,
    height: 55,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  doneText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },

  headerContainer: {
    height: 110,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 10,
  },
  headerTitle: {
    fontFamily: fonts.gilorySemibold,
    color: '#fff',
    fontSize: 20,
  },
});
