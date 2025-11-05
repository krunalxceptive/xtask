import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity, 
  StyleSheet,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/Ionicons';
import HeaderBack from '../components/HeaderBack';
import { colors } from '../colors/colors';

const AddTask = () => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Pending');

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartDate, setShowStartDate] = useState(false);
  const [showEndDate, setShowEndDate] = useState(false);

  const [showStartTime, setShowStartTime] = useState(false);
  const [showEndTime, setShowEndTime] = useState(false);

  const handleDateChange = (event, selectedDate, type) => {
    if (type === 'start') {
      setShowStartDate(false);
      if (selectedDate) setStartDate(selectedDate);
    } else {
      setShowEndDate(false);
      if (selectedDate) setEndDate(selectedDate);
    }
  };

  const handleTimeChange = (event, selectedTime, type) => {
    if (type === 'start') {
      setShowStartTime(false);
      if (selectedTime) setStartDate(selectedTime);
    } else {
      setShowEndTime(false);
      if (selectedTime) setEndDate(selectedTime);
    }
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-GB');
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <HeaderBack title="Add Task" />
      <ScrollView contentContainerStyle={styles.container}>
        {/* Task Name */}
        <Text style={styles.label}>TASK NAME</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter task name"
          placeholderTextColor="#aaa"
          value={taskName}
          onChangeText={setTaskName}
        />

        {/* Team Member */}
        <Text style={styles.label}>TEAM MEMBER</Text>
        <TouchableOpacity style={styles.assignContainer}>
          <View style={styles.circle}>
            <Icon name="add" size={28} color="#999" />
          </View>
          <Text style={styles.assignText}>Assign staff</Text>
        </TouchableOpacity>

        {/* Dates and Times */}
        <View style={styles.row}>
          <View style={styles.dateContainer}>
            <Text style={styles.label}>START DATE</Text>
            <TouchableOpacity
              style={styles.datePicker}
              onPress={() => setShowStartDate(true)}>
              <Text style={styles.dateText}>{formatDate(startDate)}</Text>
              <Icon name="calendar-outline" size={20} color="#777" />
            </TouchableOpacity>
          </View>

          <View style={styles.dateContainer}>
            <Text style={styles.label}>START TIME</Text>
            <TouchableOpacity
              style={styles.datePicker}
              onPress={() => setShowStartTime(true)}>
              <Text style={styles.dateText}>{formatTime(startDate)}</Text>
              <Icon name="time-outline" size={20} color="#777" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.dateContainer}>
            <Text style={styles.label}>END DATE</Text>
            <TouchableOpacity
              style={styles.datePicker}
              onPress={() => setShowEndDate(true)}>
              <Text style={styles.dateText}>{formatDate(endDate)}</Text>
              <Icon name="calendar-outline" size={20} color="#777" />
            </TouchableOpacity>
          </View>

          <View style={styles.dateContainer}>
            <Text style={styles.label}>END TIME</Text>
            <TouchableOpacity
              style={styles.datePicker}
              onPress={() => setShowEndTime(true)}>
              <Text style={styles.dateText}>{formatTime(endDate)}</Text>
              <Icon name="time-outline" size={20} color="#777" />
            </TouchableOpacity>
          </View>
        </View>

        {showStartDate && (
          <DateTimePicker
            value={startDate}
            mode="date"
            display="default"
            onChange={(e, d) => handleDateChange(e, d, 'start')}
          />
        )}
        {showEndDate && (
          <DateTimePicker
            value={endDate}
            mode="date"
            display="default"
            onChange={(e, d) => handleDateChange(e, d, 'end')}
          />
        )}
        {showStartTime && (
          <DateTimePicker
            value={startDate}
            mode="time"
            is24Hour={false}
            display="default"
            onChange={(e, d) => handleTimeChange(e, d, 'start')}
          />
        )}
        {showEndTime && (
          <DateTimePicker
            value={endDate}
            mode="time"
            is24Hour={false}
            display="default"
            onChange={(e, d) => handleTimeChange(e, d, 'end')}
          />
        )}

        {/* Description */}
        <Text style={styles.label}>DESCRIPTION</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter description"
          placeholderTextColor="#aaa"
          value={description}
          onChangeText={setDescription}
        />

        {/* Status Buttons */}
        <Text style={styles.label}>STATUS</Text>
        <View style={styles.statusContainer}>
          {['Pending', 'On Going', 'Completed', 'Urgent'].map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.statusButton,
                status === item && styles.statusButtonActive,
              ]}
              onPress={() => setStatus(item)}>
              <Text
                style={[
                  styles.statusText,
                  status === item && styles.statusTextActive,
                ]}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Done Button */}
        <TouchableOpacity activeOpacity={0.7} style={{ marginTop: 30 }}>
          <LinearGradient
            colors={[colors.primary, colors.secondary]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.doneButton}>
            <Text style={styles.doneText}>Done</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default AddTask;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
  },
  label: {
    color: '#888',
    fontSize: 14,
    marginTop: 15,
    fontWeight: '600',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    fontSize: 16,
    paddingVertical: 6,
    color: '#000',
  },
  assignContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1.5,
    borderColor: '#aaa',
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dashed',
  },
  assignText: {
    marginLeft: 10,
    fontSize: 15,
    color: '#777',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateContainer: {
    width: '48%',
    marginTop: 15,
  },
  datePicker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 6,
  },
  dateText: {
    fontSize: 15,
    color: '#000',
  },
  statusContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  statusButton: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    backgroundColor: '#f2f2f2',
    marginRight: 10,
    marginBottom: 10,
  },
  statusButtonActive: {
    backgroundColor: '#34a853',
  },
  statusText: {
    color: '#000',
    fontSize: 14,
  },
  statusTextActive: {
    color: '#fff',
  },
  doneButton: {
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  doneText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
