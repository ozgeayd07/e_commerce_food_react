import React from 'react';
import {  useNavigation } from 'react-router-dom';
import Button from '@mui/material/Button';

function Logout() {
  const navigator = useNavigation();

  const handleLogout = () => {
    navigator.push('/');
  };

  return (
    <div>
      <h2>Oturumu Kapat</h2>
      <Button variant="contained" color="error" onClick={handleLogout}>
        Oturumu Kapat
      </Button>
    </div>
  );
}

export default Logout;
