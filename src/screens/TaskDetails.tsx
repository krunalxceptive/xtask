import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import HeaderBack from '../components/HeaderBack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../colors/colors';

const TaskDetails = () => {
  const [selectedTab, setSelectedTab] = useState('Comments');

  return (
    <View style={styles.container}>
      <HeaderBack title="Task Details" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
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
                    fontWeight: '500',
                    textAlign: 'center',
                  }}
                >
                  Complete
                </Text>
              </View>
            </View>

            <View style={styles.iconRow}>
              <TouchableOpacity>
                <Icon
                  name="pencil"
                  size={24}
                  color={colors.primary}
                  style={{ marginRight: 12 }}
                />
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
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
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
      </ScrollView>

      {/* Bottom Comment Input */}
      {selectedTab === 'Comments' && (
        <View style={styles.commentInputContainer}>
          <TextInput
            placeholder="Write comment..."
            placeholderTextColor="#A0A0A0"
            style={styles.commentInput}
          />
          <TouchableOpacity style={styles.sendButton}>
            <Icon name="send" size={24} color="#5E35B1" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default TaskDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F8',
  },
  taskCard: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 16,
    padding: 16,
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
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
  },
  taskDate: {
    fontSize: 13,
    color: '#9E9E9E',
    marginTop: 4,
  },
  taskSubText: {
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
    fontWeight: '500',
    textAlign: 'center',
  },
  iconRow: {
    alignSelf: 'center',
  },
  completeText: {
    marginTop: 6,
    color: '#9E9E9E',
    fontSize: 14,
    fontWeight: '500',
  },
  tabsWrapper: {
    flexDirection: 'row',
    backgroundColor: '#F4EFFC',
    marginTop: 20,
    paddingVertical: 10,
    justifyContent: 'space-around',
  },
  tabItem: {
    alignItems: 'center',
  },
  tabText: {
    fontSize: 15,
    color: '#A1A1AA',
    fontWeight: '500',
  },
  tabActiveText: {
    color: '#5E35B1',
    fontWeight: '600',
  },
  tabUnderline: {
    width: 40,
    height: 3,
    backgroundColor: '#5E35B1',
    borderRadius: 2,
    marginTop: 6,
  },
  commentSection: {
    marginHorizontal: 16,
    marginTop: 20,
  },
  commentTitle: {
    fontSize: 15,
    fontWeight: '600',
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
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 10,
  },
  commentName: {
    fontSize: 15,
    color: '#000',
    fontWeight: '600',
  },
  commentRole: {
    color: '#9E9E9E',
    fontSize: 13,
  },
  commentTime: {
    color: '#9E9E9E',
    fontSize: 13,
  },
  commentBody: {
    fontSize: 14,
    color: '#000',
    marginTop: 10,
  },
  commentInputContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  commentInput: {
    flex: 1,
    fontSize: 15,
    paddingHorizontal: 10,
  },
  sendButton: {
    padding: 6,
  },
});
