import React, { createContext } from 'react'
import app from '../firebase/firebase.init';
import { getAuth } from 'firebase/auth';

export const AuthContext = createContext();

const UserContext = ({ children }) => {
    // const auth = getAuth(app)
    const user = { displayName: 'Arif' }
    const authInfo = { user: user };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default UserContext
