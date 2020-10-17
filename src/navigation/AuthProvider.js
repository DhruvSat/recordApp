import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
// import HomeScreen from '../screens/HomeScreen';

// import { useNavigation } from '@react-navigation/native';
export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    // const navigation = useNavigation();
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async (email, password) => {
                    try {
                        await auth().signInWithEmailAndPassword(email, password);
                        // navigation.navigate('HomeScreen')
                    } catch (e) {
                        console.log(e);
                    }
                },
                register: async (email, password, fullName, phone) => {
                    try {
                        await auth().createUserWithEmailAndPassword(email, password).then((response) => {
                            const uid = response.user.uid
                            const data = {
                                id: uid,
                                email,
                                fullName,
                                phone,
                                'isPolice': false
                            };

                            const usersRefs = firestore().collection('users')
                            usersRefs.doc(uid).set(data)
                                .catch((error) => {
                                    alert(error)
                                });


                        }).catch((error) => {
                            alert(error)
                        });;
                        // navigation.navigate('HomeScreen')
                    } catch (e) {
                        console.log(e);
                    }
                },

                logout: async () => {
                    try {
                        await auth().signOut();
                    } catch (e) {
                        console.error(e);
                    }
                }
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
