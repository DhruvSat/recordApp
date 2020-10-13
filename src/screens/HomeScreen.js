import React, { useState, useContext } from 'react'

import firestore from '@react-native-firebase/firestore'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import News from '../components/News'

import { AuthContext } from '../navigation/AuthProvider';


export default function HomeScreen({ navigation }) {
    const { user, logout } = useContext(AuthContext);

    const [userEmail, setUserEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [userPhone, setUserPhone] = useState('')

    //fetching user data by user id
    firestore()
        .collection('users')
        .doc(user.uid)
        .get()
        .then(documentSnapshot => {
            if (documentSnapshot.exists) {
                setUserName(documentSnapshot.data().fullName)
                setUserEmail(documentSnapshot.data().email)
                setUserPhone(documentSnapshot.data().phone)
            }
        });

    return (
        <View>

            <News />

            <Text>Email:{userEmail}</Text>
            <Text>Name:{userName}</Text>
            <Text>Phone:{userPhone}</Text>

            <TouchableOpacity style={styles.button}
                onPress={() => logout()}>
                <Text style={styles.buttonText}> LOG OUT </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}
                onPress={() => { navigation.navigate('ProfileScreen') }}>
                <Text style={styles.buttonText}> GO TO PROFILE </Text>
            </TouchableOpacity>
        </View>

    )

}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#00008d',
        borderRadius: 40,
        color: '#ffffff',
        marginVertical: 15,
        textAlign: 'center',
        paddingVertical: 9,
        height: 45,
        marginTop: 20,
        marginBottom: 20,
        width: 100,
        alignSelf: 'center',
    },
})

