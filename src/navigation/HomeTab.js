import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ServiceScreen from '../screens/ServiceScreen';
import HomeStack from './HomeStack';

const AppTabs = createBottomTabNavigator();
export default function HomeTab() {
    return (
        <AppTabs.Navigator>
            <AppTabs.Screen name="HomeScreen" component={HomeStack} />
            <AppTabs.Screen name="ServiceScreen" component={ServiceScreen} />
        </AppTabs.Navigator>
    )

}