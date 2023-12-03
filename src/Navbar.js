import React from 'react';
import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { getAuth, signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import './App.css'; // Ensure that App.css contains the styles for the navbar

function Navbar() {
  const { currentUser } = useContext(AuthContext);
  const auth = getAuth();

  const handleLogout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      window.location.reload();
    }).catch((error) => {
      // An error happened.
      console.error('Logout error:', error);
    });
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">LOC8</Link>
        <ul className="navbar-nav">
          <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
          {!currentUser && <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>}
          {!currentUser && <li className="nav-item"><Link to="/signup" className="nav-link">Signup</Link></li>}
          {currentUser && <li className="nav-item"><span className="logged-in-text">Logged In</span></li>}
          {currentUser?.isSuperuser && (
            <li className="nav-item">
              <Link to="/superuser" className="nav-link">Superuser Panel</Link>
            </li>
          )}
          {currentUser?.isSuperuser && (
            <li className="nav-item">
              <Link to="/superuser" className="nav-link">Superuser Panel</Link>
            </li>
          )}
          {currentUser?.isSuperuser && (
            <li className="nav-item">
              <Link to="/superuser" className="nav-link">Superuser Panel</Link>
            </li>
          )}
          {currentUser && <li className="nav-item"><Link to="/" onClick={handleLogout} className="nav-link">Logout</Link></li>}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;