import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SettingScreen from '../screens/SettingScreen';
import SchemeScreen from '../screens/SchemeScreen';
import HomeTab from './HomeTab';


const Drawer = createDrawerNavigator();

export default function HomeDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeTab} />
            <Drawer.Screen name="Schemes" component={SchemeScreen} />
            <Drawer.Screen name="Settings" component={SettingScreen} />
        </Drawer.Navigator>
    )

}