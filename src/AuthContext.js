import React, { createContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      // You may need to fetch additional user data to determine if they are a superuser
      // For example, you could fetch the user's role from Firestore and set it here
      // This is just a placeholder and should be replaced with your actual logic
      if (user) {
        user.isSuperuser = user.email === 'superuser@example.com'; // Replace with actual check
      }
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};