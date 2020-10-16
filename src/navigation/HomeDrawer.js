import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SettingScreen from '../screens/SettingScreen';
import MyComplaint from '../screens/MyComplaint';
// import { HomeDrawerContent } from './HomeDrawerContent'
import HomeTab from './HomeTab';


const Drawer = createDrawerNavigator();

export default function HomeDrawer() {
    return (
        // <Drawer.Navigator drawerContent={props => <HomeDrawerContent {...props} />}>
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeTab} />
            <Drawer.Screen name="My Complaints" component={MyComplaint} />
            <Drawer.Screen name="Settings" component={SettingScreen} />
        </Drawer.Navigator>
    )

}