import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const teamData = [
  {
    id: '1',
    name: 'Miral',
    role: 'Manager',
    tasks: 2,
    company: 'Xceptive Solutions LLP',
    progress: 50,
    image: require('../assets/images/user-icon.png'),
  },
  {
    id: '2',
    name: 'Avani',
    role: 'Android Developer',
    tasks: 8,
    company: 'Xceptive Solutions LLP',
    progress: 42,
    image: require('../assets/images/user-icon.png'),
  },
  {
    id: '3',
    name: 'Hardik',
    role: 'CEO',
    tasks: 0,
    company: 'Xceptive Solutions LLP',
    progress: 100,
    image: require('../assets/images/user-icon.png'),
  },
  {
    id: '4',
    name: 'Jaykishan',
    role: 'Android Developer',
    tasks: 0,
    company: 'Xceptive Solutions LLP',
    progress: 100,
    image: require('../assets/images/user-icon.png'),
  },
  {
    id: '5',
    name: 'Ajay',
    role: 'iOS Developer',
    tasks: 2,
    company: 'Xceptive Solutions LLP',
    progress: 100,
    image: require('../assets/images/user-icon.png'),
  },
];

const TeamScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardLeft}>
        <Text style={styles.name}>{item.name}</Text>

        <View style={styles.roleContainer}>
          <Text style={styles.role}>⚙ {item.role}</Text>
          <Text style={styles.tasks}>📋 {item.tasks} task</Text>
        </View>

        <Text style={styles.company}>🏢 {item.company}</Text>

        <View style={styles.progressContainer}>
          <View
            style={[
              styles.progressBar,
              {
                width: `${item.progress}%`,
                backgroundColor:
                  item.progress < 50
                    ? '#f44336'
                    : item.progress === 100
                    ? '#4caf50'
                    : '#8bc34a',
              },
            ]}
          />
        </View>

        <Text
          style={[
            styles.progressText,
            {
              color:
                item.progress < 50
                  ? '#f44336'
                  : item.progress === 100
                  ? '#4caf50'
                  : '#8bc34a',
            },
          ]}
        >
          {item.progress}%
        </Text>
      </View>

      <Image source={item.image} style={styles.avatar} />
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Gradient Header */}
      <LinearGradient colors={['#9c27b0', '#673ab7']} style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Team List</Text>
      </LinearGradient>

      {/* FlatList for team members */}
      <FlatList
        data={teamData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingVertical: 15, paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      />

      {/* Floating Add Button */}
      <TouchableOpacity style={styles.fab}>
        <Text style={styles.fabIcon}>＋</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TeamScreen;

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
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginVertical: 8,
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  cardLeft: {
    flex: 1,
  },
  name: {
    fontSize: 17,
    fontWeight: '700',
    color: '#000',
    marginBottom: 5,
  },
  roleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  role: {
    fontSize: 13,
    color: '#777',
    marginRight: 10,
  },
  tasks: {
    fontSize: 13,
    color: '#777',
  },
  company: {
    fontSize: 13,
    color: '#999',
    marginTop: 2,
  },
  progressContainer: {
    height: 6,
    backgroundColor: '#ddd',
    borderRadius: 5,
    marginTop: 8,
    width: '100%',
  },
  progressBar: {
    height: 6,
    borderRadius: 5,
  },
  progressText: {
    fontSize: 13,
    marginTop: 4,
    fontWeight: '600',
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 25,
    marginLeft: 10,
  },
  fab: {
    position: 'absolute',
    bottom: 25,
    right: 25,
    width: 60,
    height: 60,
    backgroundColor: '#673ab7',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
  },
  fabIcon: {
    fontSize: 32,
    color: '#fff',
    marginBottom: 2,
  },
});
