import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';
import '../styles/ResetPassword.css'

function ResetPassword() {
  const [email, setEmail] = useState("");

  const handleResetPassword = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/reset-password', { email });
      
      if (response.data.status === 'success') {
        alert('Şifre sıfırlama linki e-posta adresinize gönderildi.');
      } else {
        alert('Bir hata oluştu. Lütfen tekrar deneyin.');
      }
    } catch (error) {
      console.error('Bir hata oluştu:', error);
    }
  };

  return (
    <div className='bodyDiv'>
      <h2 className='Reseth2'>Şifre Sıfırla</h2>
      <form className='form' onSubmit={handleResetPassword}>
        <label className='formlabel'>
          <div className="Forms">
            <TextField fullWidth sx={{ m: 1 }}
              required
              id="fullWidth"
              label="E-posta Adresi"
              type="email"
              size="small"
              onChange={(e) => setEmail(e.target.value)}
            /> <FormHelperText>E-posta Adresinizi Giriniz.</FormHelperText></div>
        </label>
        <input  className="inputsubmit " type="submit" value="Şifreyi Sıfırla" />
      </form>
    </div>
  );
}

export default ResetPassword;
