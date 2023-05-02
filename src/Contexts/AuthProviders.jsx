import React, { createContext } from 'react';
export const AuthContext = createContext(null)
const AuthProviders = ({children}) => {

        const createUser = (email,password) => {
        setLoading(true)
      return  createUserWithEmailAndPassword(auth,email,password)
    }
    const login = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }
    
    const authInfo = {
        createUser,
        login,
        logout,
        

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;