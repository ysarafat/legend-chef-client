/* eslint-disable react/jsx-no-constructed-context-values */
import {
    GithubAuthProvider,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import app from '../Firebase/Firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

function AuthProviders({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    // update user name and photo
    const updateUser = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
            .then(() => {
                toast.success('Registration successfully');
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    // login user
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    const logout = () => {
        setLoading(true);
        return signOut(auth);
    };

    // login with google
    const loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };
    //  login with github
    const loginWithGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    };

    // reset password
    const resetPassword = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
            setUser(loggedUser);
            setLoading(false);
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
        loginWithGoogle,
        loginWithGithub,
        logout,
        resetPassword,
        loading,
    };

    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
}

export default AuthProviders;
