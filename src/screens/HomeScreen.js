import React, { useContext, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native'
import { AuthContext } from '../navigation/AuthProvider';
import firestore from '@react-native-firebase/firestore';
import HomePolice from '../screens/police/HomePolice';
import HomeCitizen from '../screens/citizen/HomeCitizen';

export default function HomeScreen() {
    const { user } = useContext(AuthContext);
    const [isPolice, setIsPolice] = useState(false)

    // fetching user data by user id
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
        <>{isPolice ? (<HomePolice />) : (<HomeCitizen />)}</>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#1a1a2e',
    },

    image: {
        width: 100,
        height: 100,
        backgroundColor: '#fff',
        borderRadius: 8
    },

    button: {
        margin: 12,
        aspectRatio: 1,
        flex: 1 / 3,
        borderRadius: 8,
        color: '#ffffff',
        marginVertical: 15,
        textAlign: 'center',
        paddingVertical: 9,
        height: 100,
        alignSelf: 'center',
    },
    button1: {
        margin: 12,
        aspectRatio: 1,
        flex: 1 / 3,
        borderRadius: 8,
        color: '#ffffff',
        marginVertical: 15,
        textAlign: 'center',
        paddingVertical: 9,
        height: 100,
        alignSelf: 'center',
    },

    buttonText: {
        fontSize: 15,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },
    formHeader: {
        marginTop: 10,
        backgroundColor: '#29294a',
        height: 33, shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1.2,
        },
        shadowOpacity: 0,
        shadowRadius: 2.62,
        elevation: 3,
    },
})
