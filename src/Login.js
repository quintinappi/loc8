import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { auth } from './firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './App.css'; // Ensure that App.css contains the styles for the form

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  return (
    <div className="form-container">
      <h2>Login</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}
      <form className="form" onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );

  async function handleLogin(event) {
    event.preventDefault();
    setError('');
    setSuccess('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setSuccess('Logged in successfully!');
      console.log('Logged in user:', userCredential.user);
      navigate('/', { state: { message: 'Logged in successfully!', name: userCredential.user.displayName || userCredential.user.email } });
      // Redirect or perform additional actions after successful login
    } catch (error) {
      setError(error.message);
      console.error('Login error:', error);
    }
  }
}

export default Login;