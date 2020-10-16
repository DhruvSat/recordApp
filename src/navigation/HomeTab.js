import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeStack from './HomeStack';
import Icon from 'react-native-vector-icons/Ionicons';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


const Tab = createMaterialBottomTabNavigator();
export default function HomeTab() {
    return (
        <Tab.Navigator
        initialRouteName="Home"
        activeColor="#fff"
        >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: '',
          tabBarColor: '#0f3460',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={HomeStack}
        options={{
          tabBarLabel: '',
          tabBarColor: '#0f3460',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeStack}
        options={{
          tabBarLabel: '',
          tabBarColor: '#0f3460',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={HomeStack}
        options={{
          tabBarLabel: '',
          tabBarColor: '#0f3460',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-aperture" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);
}