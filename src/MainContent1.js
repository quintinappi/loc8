import React from 'react';
import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function MainContent() {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { message, name } = location.state || {};

  if (!currentUser) {
    navigate('/login', { state: { message: 'You need to log in to access the home page.' } });
    return null;
  }
  return (
    <main>
      {message && <div className="alert alert-success">{message} Welcome, {name}!</div>}
      {/* Main content goes here */}
    </main>
  );
}

export default MainContent;