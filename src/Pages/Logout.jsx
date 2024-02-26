
import React from 'react';

const Logout = () => {
  const handleLogout = async () => {
    try {
      const response = await fetch('  ');
      const data = await response.json();
      if (data.success) {
        console.log('Logout successful');
        // Redirect to login or perform any other action
      } else {
        console.error('Logout failed:', data.message);
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
