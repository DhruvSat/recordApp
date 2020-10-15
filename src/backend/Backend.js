import React, { createContext, useState } from 'react';
import { AuthContext } from '../navigation/AuthProvider';
import firestore from '@react-native-firebase/firestore';

export const BackendContext = createContext({});

const BackendProvider = ({ children }) => {
    const { user } = useContext(AuthContext);
    return (
        <BackendContext.Provider
        value={{
            
        }}
        >

        </BackendContext.Provider>
    )
}
