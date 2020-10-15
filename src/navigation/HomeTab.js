import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ServiceScreen from '../screens/ServiceScreen';
import HomeStack from './HomeStack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


const AppTabs = createBottomTabNavigator();
export default function HomeTab() {
    return (
        <AppTabs.Navigator>
            <AppTabs.Screen
                options={{
                    tabBarIcon: ({ color }) => <Ionicons name="home" size={30} color={color} />
                }}
                name="Home"
                component={HomeStack}
            />
            <AppTabs.Screen
                options={{
                    tabBarIcon: ({ color }) => <MaterialIcons name="miscellaneous-services" size={30} color={color} />
                }}
                name="Service"
                component={ServiceScreen}
            />
        </AppTabs.Navigator>
    )

}