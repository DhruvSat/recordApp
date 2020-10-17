import React, { useContext, useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SettingScreen from '../screens/SettingScreen';
import MyComplaint from '../screens/MyComplaint';
// import { HomeDrawerContent } from './HomeDrawerContent'
import HomeTab from './HomeTab';
import Meetings from '../screens/police/Meetings';
import firestore from '@react-native-firebase/firestore'
import { AuthContext } from './AuthProvider';


const Drawer = createDrawerNavigator();

export default function HomeDrawer() {
    const { user } = useContext(AuthContext);
    const [isPolice, setIsPolice] = useState(false)
    firestore()
        .collection('users')
        .doc(user.uid)
        .get()
        .then(documentSnapshot => {
            if (documentSnapshot.exists) {
                setIsPolice(documentSnapshot.data().isPolice)
            }
        });
    return (
        // <Drawer.Navigator drawerContent={props => <HomeDrawerContent {...props} />}>
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeTab} />
            {isPolice ?
                (<Drawer.Screen name="Meetings" component={Meetings} />)
                :
                (<Drawer.Screen name="My Complaints" component={MyComplaint} />)}
            <Drawer.Screen name="Settings" component={SettingScreen} />
        </Drawer.Navigator>
    )

}
