import React, { useState } from 'react'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import News from '../components/News'



const HomeScreen = (props) => {

    const userID = props.extraData.uid;

    const [userEmail, setUserEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [userPhone, setUserPhone] = useState('')

    const onLogoutPress = () => {
        auth()
            .signOut()
            .then(() => alert('Logged out successfully'));
    }

    //fetching user data by user id
    firestore()
        .collection('users')
        .doc(userID)
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
                onPress={() => onLogoutPress()}>
                <Text style={styles.buttonText}> LOG OUT </Text>
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

export default HomeScreen