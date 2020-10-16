import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import firestore from '@react-native-firebase/firestore'
import { AuthContext } from '../navigation/AuthProvider';


const ProfileScreen = ({ navigation }) => {

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
        <View style={styles.container}>
            <Text >Email:{userEmail}</Text>
            <Text>Name:{userName}</Text>
            <Text>Phone:{userPhone}</Text>

            <TouchableOpacity style={styles.button}
                onPress={() => logout()}>
                <Text style={styles.buttonText}> LOG OUT </Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexGrow:1,
        backgroundColor: '#1a1a2e',
    },
    button: {
        backgroundColor: '#e94560',
        borderRadius: 8,
        color: '#ffffff',
        marginVertical: 15,
        textAlign: 'center',
        paddingVertical: 9,
        height: 40,
        marginTop: 20,
        marginBottom: 20,
        width: 100,
        alignSelf: 'center',
    },
    buttonText: {
        fontSize:15,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
    },
})


export default ProfileScreen