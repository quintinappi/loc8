import React, { useState } from 'react';
import { makeAdmin } from './makeAdmin';

function AdminPanel() {
  const [email, setEmail] = useState('');

  const handleMakeAdmin = () => {
    makeAdmin(email);
  };

  return (
    <div className="form-container">
      <h2>Admin Panel</h2>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <input type="email" placeholder="Enter user email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button type="button" onClick={handleMakeAdmin}>Make Superuser</button>
      </form>
    </div>
  );
}

export default AdminPanel;