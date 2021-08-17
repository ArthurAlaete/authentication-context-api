import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as auth from '../services/auth';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadStorageData() {

            const storagedUser = await AsyncStorage.getItem('@storage_user')
            const storagedToken = await AsyncStorage.getItem('@storage_token');

            if(storagedUser && storagedToken) {
                setUser(JSON.parse(storagedUser))
            }
            
            setLoading(false);
        }

        loadStorageData();
    }, [])

    async function singIn() {
       const response = await auth.singIn();
       setUser(response.user)

       await AsyncStorage.setItem('@storage_user', JSON.stringify(response.user))
       await AsyncStorage.setItem('@storage_token', response.token);
    }

    async function singOut() {
        await AsyncStorage.clear();
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user , singIn, singOut, loading }} >
            {children}
        </AuthContext.Provider>
    )
};

export default AuthContext;