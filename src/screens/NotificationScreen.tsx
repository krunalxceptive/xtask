import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const notifications = [
  {
    id: '1',
    title: 'App Test',
    date: '12 Sep 2024, 03:11 PM',
  },
  {
    id: '2',
    title: 'Aa',
    date: '12 Sep 2024, 03:27 PM',
  },
  {
    id: '3',
    title: 'New Job Start from Tomorrow',
    date: '13 Sep 2024, 07:27 AM',
  },
  {
    id: '4',
    title:
      'Approval Of Ongoing Projects  Review and Approve web and mobile app work',
    date: '16 Sep 2024, 12:50 PM',
  },
  {
    id: '5',
    title: 'Demo demo 123',
    date: '17 Sep 2024, 11:21 AM',
  },
  {
    id: '6',
    title: 'Democrats have Been In The Process For',
    date: '17 Sep 2024, 12:00 PM',
  },
  {
    id: '7',
    title: 'Aaa',
    date: '17 Sep 2024, 02:11 PM',
  },
];

const NotificationScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.date}>{item.date}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Gradient Header */}
      <LinearGradient
        colors={['#9c27b0', '#673ab7']}
        style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Notification</Text>
      </LinearGradient>

      {/* FlatList for Notifications */}
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf7fd'
  },
  headerContainer: {
    height: 110,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
  },
  listContainer: {
    paddingVertical: 15,
    paddingBottom: 120,
  },
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginVertical: 8,
    borderRadius: 15,
    padding: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
    marginBottom: 5,
  },
  date: {
    fontSize: 13,
    color: '#777',
  },
});
