import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../colors/colors';
import { useNavigation } from '@react-navigation/native';

const TaskScreen = () => {
  const [activeTab, setActiveTab] = useState('Pending');
  const navigation = useNavigation();

  const tasks = [
    {
      id: '1',
      title: 'xs loyality',
      date: '28 Dec 2024 , 10:44 AM',
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
      status: 'Pending',
    },
    {
      id: '2',
      title: 'salon changes',
      date: '06 Jan 2025 , 05:31 PM',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
      status: 'Pending',
    },
    {
      id: '3',
      title: 'learning api call',
      date: '23 May 2025 , 03:15 PM',
      image: 'https://randomuser.me/api/portraits/women/3.jpg',
      status: 'Pending',
    },
    {
      id: '4',
      title: 'app deployment',
      date: '05 Mar 2025 , 04:30 PM',
      image: 'https://randomuser.me/api/portraits/men/4.jpg',
      status: 'On Going',
    },
    {
      id: '5',
      title: 'client review',
      date: '01 Feb 2025 , 02:00 PM',
      image: 'https://randomuser.me/api/portraits/men/5.jpg',
      status: 'Completed',
    },
  ];

  const filteredTasks = tasks.filter(item => item.status === activeTab);

  const renderTask = ({ item }) => (
    <View style={styles.taskCard}>
      <View
        style={{
          height: '100%',
          width: 10,
          backgroundColor: colors.gray,
          borderTopLeftRadius: 12, 
          borderBottomLeftRadius: 12
        }}
      ></View>

       
      <View style={{ flex: 1, padding: 16 }}>
        <Text style={styles.taskTitle}>{item.title}</Text>
        <View style={styles.dateRow}>
          <Ionicons name="calendar-outline" size={16} color="#666" />
          <Text style={styles.taskDate}>{item.date}</Text>
        </View>
      </View> 
      <Image source={{ uri: item.image }} style={styles.avatar} />
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.fab}
        onPress={() => navigation.navigate('AddTask')}
      >
        <Ionicons name="add" size={32} color="#fff" />
      </TouchableOpacity>
      <Header title="Task List" />

      <View style={{ backgroundColor: colors.background }}>
        {/* Tabs always visible */}
        {/* Scrollable Tabs */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabsContainer}
        >
          {['Pending', 'On Going', 'Completed'].map(tab => (
            <TouchableOpacity
              activeOpacity={0.7}
              key={tab}
              style={[
                styles.tabButton,
                activeTab === tab && styles.activeTabButton,
              ]}
              onPress={() => setActiveTab(tab)}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab && styles.activeTabText,
                ]}
              >
                {tab}
              </Text>
              <View
                style={[
                  styles.countBadge,
                  activeTab === tab && styles.activeBadge,
                ]}
              >
                <Text
                  style={[
                    styles.countText,
                    activeTab === tab && styles.activeCountText,
                  ]}
                >
                  {tasks.filter(t => t.status === tab).length}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Scrollable Task List only */}
        <View>
          <FlatList
            data={filteredTasks}
            keyExtractor={item => item.id}
            renderItem={renderTask}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
};

export default TaskScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  tabsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 10,
    paddingBottom: 5,
  },
  tabButton: {
    flexDirection: 'row',
    backgroundColor: '#EDE9FE',
    borderRadius: 30,
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginRight: 10,
  },

  activeTabButton: {
    backgroundColor: '#6C4ED9',
  },
  tabText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
  },
  activeTabText: {
    color: '#fff',
  },
  countBadge: {
    backgroundColor: '#DAD2FF',
    borderRadius: 10,
    marginLeft: 8,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  activeBadge: {
    backgroundColor: '#fff',
  },
  countText: {
    color: '#ff3f3fff',
    fontSize: 12,
    fontWeight: '600',
  },
  activeCountText: {
    color: '#ff3f3fff',
  },
  listContainer: {
    padding: 16,
    paddingBottom: 100,
  },
  taskCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    elevation: 4,
    shadowColor: '#999',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111',
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  taskDate: {
    color: '#666',
    marginLeft: 6,
    fontSize: 13,
    fontWeight: '500',
  },
  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    marginRight: 16,
  },
  fab: {
    position: 'absolute',
    bottom: 125,
    right: 20,
    zIndex: 999,
    backgroundColor: colors.primary,
    borderRadius: 30,
    width: 56,
    height: 56,
    elevation: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
