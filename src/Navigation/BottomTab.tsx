// navigation/MyTabs.js
import React from 'react';
import { Image, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TaskScreen from '../screens/TaskScreen';
import TeamScreen from '../screens/TeamScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { colors } from '../colors/colors';
import { fonts } from '../font/fonts';
 
const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: 90, // 👈 ensures consistent spacing for each tab item
        },
        tabBarStyle: {
          height: 110,
          borderTopWidth: 0,
          elevation: 5, 
          backgroundColor: '#fff',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: 'absolute',
          overflow: 'hidden',
        },
      }}
    >
      {/* 🟣 Task Tab */}
      <Tab.Screen
        name="Task"
        component={TaskScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', top: 10, width: 90 }}>
              <Image
                source={require('../assets/images/booking.png')}
                resizeMode="contain"
                style={{
                  width: 28,
                  height: 24,
                  tintColor: focused ? colors.primary : colors.black,
                }}
              />   
              <Text
                style={{
                  color: focused ? colors.primary : '#999',
                  fontSize: 10,
                  marginTop: 4,
                  fontFamily: focused ? fonts.gilorySemibold : fonts.giloryMedium,
                }}
              >
                Task
              </Text>
            </View>
          ),
        }}
      />

      {/* 👥 Team Tab */}
      <Tab.Screen
        name="Team"
        component={TeamScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', top: 10 , width: 90}}>
              <Image
                source={require('../assets/images/team.png')}
                resizeMode="contain"
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? colors.primary : colors.black,
                }}
              />
              <Text
                style={{
                  color: focused ? colors.primary : '#999',
                  fontSize: 10,
                  marginTop: 4,
                  fontWeight: focused ? '600' : '400',
                }}
              >
                Team
              </Text>
            </View>
          ),
        }}
      />

      {/* 🔔 Notification Tab */}
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', top: 10, width: 90 }}>
              <Image
                source={require('../assets/images/noti.png')}
                resizeMode="contain"
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? colors.primary : colors.black,
                }}
              />
              <Text
                style={{
                  color: focused ? colors.primary : '#999',
                  fontSize: 10,
                  marginTop: 4,
                  fontWeight: focused ? '600' : '400',
                }}
              >
                Notification
              </Text>
            </View>
          ),
        }}
      />

      {/* 👤 Profile Tab */}
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', top: 10, width: 90 }}>
              <Image
                source={require('../assets/images/view_profile.png')}
                resizeMode="contain"
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? colors.primary : colors.black,
                }}
              />
              <Text
                style={{
                  color: focused ? colors.primary : '#999',
                  fontSize: 10,
                  marginTop: 4,
                  fontWeight: focused ? '600' : '400',
                }}
              >
                Profile
              </Text>
            </View>
          ),
        }}
      /> 
    </Tab.Navigator>
  );
}
  