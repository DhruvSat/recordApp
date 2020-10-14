import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

/**
 * This provider is created
 * to access user in whole app
 */

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async (email, password) => {
                    try {
                        await auth().signInWithEmailAndPassword(email, password);
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
                                phone
                            };

                            const usersRefs = firestore().collection('users')
                            usersRefs.doc(uid).set(data)
                                .catch((error) => {
                                    alert(error)
                                });


                        }).catch((error) => {
                            alert(error)
                        });;
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
