import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
    GoogleAuthProvider, 
    signInWithPopup, 
    signOut, 
    onAuthStateChanged,
    createUserWithEmailAndPassword, // For registration
    signInWithEmailAndPassword,     // For email login
    updateProfile                   // To add name/photoURL on register
} from 'firebase/auth';
import auth from '../firebase/firebase.config'; // Import initialized Firebase Auth
import PropTypes from 'prop-types';

// 1. Create the Context
const AuthContext = createContext(null);

// Custom hook to use the context
export const useAuth = () => {
    return useContext(AuthContext);
};

// 2. Create the Provider Component
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // ------------------------------------------
    // A. Authentication Functions
    // ------------------------------------------

    // 1. Google Sign-In Function
    const googleSignIn = () => {
        setLoading(true);
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    };

    // 2. Email/Password Registration
    const registerUser = (email, password, name, photoURL) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                // After successful creation, update the user profile with name and photo
                return updateProfile(result.user, {
                    displayName: name,
                    photoURL: photoURL
                }).then(() => {
                    // Force the state change listener (onAuthStateChanged) to update immediately
                    // This is important because updateProfile doesn't always trigger a state change immediately
                    setUser({
                        ...result.user,
                        displayName: name,
                        photoURL: photoURL
                    });
                    return result; // Return the result for the component to handle success
                });
            });
    };

    // 3. Email/Password Login
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };


    // 4. Sign-Out Function
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    // ------------------------------------------
    // B. Manage User State (Crucial for persistence on reload)
    // ------------------------------------------

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('Firebase Auth State Changed. Current User:', currentUser);
            setUser(currentUser);
            // Crucial: Set loading to false once the check is complete
            setLoading(false); 
        });

        // Cleanup subscription on component unmount (Prevents memory leaks)
        return () => {
            unsubscribe();
        };
    }, []);

    // ------------------------------------------
    // C. Context Value
    // ------------------------------------------
    const authInfo = {
        user,
        loading,
        googleSignIn,
        logOut,
        registerUser,
        loginUser,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {/* We keep the full-page loading spinner here because the whole app 
            is wrapped by this provider, ensuring no content shows before auth check.
            */}
            {loading ? <div className="flex justify-center items-center min-h-screen">
                <span className="loading loading-spinner text-primary loading-lg"></span>
            </div> : children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthProvider;