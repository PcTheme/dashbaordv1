// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from '../Componets/Header'; // Import your Header component
import Dashboard from '../Pages/Dashboard';
import Users from '../Pages/Users';
import Login from '../Pages/Login';
import Logout from '../Pages/Logout';
import Register from '../Pages/Register';

const App = () => {
  const location = useLocation(); // Access location using useLocation hook
  return (
    <>
      <div>
        <Header location={location} /> {/* Pass location as prop to Header component */}
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/Users" element={<Users />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/Logout" element={<Logout />} />
          <Route exact path="/Register" element={<Register />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
