import React, { useState } from 'react';
import { auth } from './firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { firestore } from './firebaseConfig';
import './App.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSignup = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords don't match.");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setSuccess('Account created successfully!');
      // Create a user profile document in Firestore
      await setDoc(doc(firestore, "users", userCredential.user.uid), {
        fullName: fullName,
        email: email,
        createdAt: new Date()
      });
      // Redirect or perform additional actions after successful signup
      // For example, navigate to the home page or user dashboard
      // navigate('/'); // Add the navigate function and import useNavigate from 'react-router-dom'
    } catch (error) {
      setError(error.message);
      setSuccess('');
    }
  };

  return (
    <div className="form-container">
      <h2>Signup</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}
      <form className="form" onSubmit={handleSignup}>
        <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;