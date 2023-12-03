import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import MainContent1 from './MainContent1';
import Login from './Login';
import AdminPanel from './AdminPanel';
import PrivateRoute from './PrivateRoute';
import SuperuserPanel from './SuperuserPanel';
import Signup from './Signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<MainContent1 />} />
          <Route path="/header" element={<Header />} />
          <Route path="/maincontent" element={<MainContent1 />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
<Route path="/superuser" element={<PrivateRoute><SuperuserPanel /></PrivateRoute>} />
<Route path="/admin" element={<PrivateRoute><AdminPanel /></PrivateRoute>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
