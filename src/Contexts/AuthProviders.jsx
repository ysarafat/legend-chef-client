/* eslint-disable react/jsx-no-constructed-context-values */
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext(null);
function AuthProviders({ children }) {
    const [user, setUser] = useState(null);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    // update user name and photo
    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        });
    };
    // login user
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };
    const logout = () => {
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
            setUser(loggedUser);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const authInfo = {
        createUser,
        login,
        user,
        updateUser,

        logout,
    };

    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
}

export default AuthProviders;
