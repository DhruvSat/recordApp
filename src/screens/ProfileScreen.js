import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import firestore from '@react-native-firebase/firestore'
import { AuthContext } from '../navigation/AuthProvider';


const ProfileScreen = () => {

    const { user, logout } = useContext(AuthContext);

    const [userEmail, setUserEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [userPhone, setUserPhone] = useState('')
    const [isPolice, setIsPolice] = useState(false)
    const [psLoc, setPsLoc] = useState(false)
    var userType = ''

    // fetching user data by user id
    firestore()
        .collection('users')
        .doc(user.uid)
        .get()
        .then(documentSnapshot => {
            if (documentSnapshot.exists) {
                setUserName(documentSnapshot.data().fullName)
                setUserEmail(documentSnapshot.data().email)
                setUserPhone(documentSnapshot.data().phone)
                setPsLoc(documentSnapshot.data().psLoc)
                setIsPolice(documentSnapshot.data().isPolice)
            }
        });
    isPolice ? userType = 'Police' : userType = 'Citizen'

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30 }}>Email:{userEmail}</Text>
            <Text style={{ fontSize: 30 }}>Name:{userName}</Text>
            <Text style={{ fontSize: 30 }}>Phone:{userPhone}</Text>
            <Text style={{ fontSize: 30 }}>User Type:{userType}</Text>
            {isPolice ? (<Text style={{ fontSize: 30 }}>Police Station:{psLoc}</Text>) : (null)}

            <TouchableOpacity style={styles.button}
                onPress={() => logout()}>
                <Text style={styles.buttonText}> LOG OUT </Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
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
        fontSize: 15,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },
})


export default ProfileScreen


//code for realtimedata
// const [userData, setUserData] = useState({
//     user: {
//         name: ''
//     }
// })

// subscriber = firestore().collection('users').doc(user.uid).onSnapshot(doc => {
//     setUserData(({
//         user: {
//             name: doc.data().fullName
//         }
//     }))
// })