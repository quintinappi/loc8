import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const PrivateRoute = ({ children, superuserOnly = false }) => {
  const { currentUser } = useContext(AuthContext);
  const isSuperuser = currentUser?.isSuperuser; // Adjust based on your data structure

  if (superuserOnly && !isSuperuser) {
    return <Navigate to="/login" replace state={{ message: 'You must be a superuser to access this page.' }} />;
  }

  return currentUser ? children : <Navigate to="/login" replace state={{ message: 'You must log in to access this page.' }} />;
};

export default PrivateRoute;