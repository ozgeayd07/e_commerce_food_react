import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';
import '../styles/ForgotPassword.css'

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const token = localStorage.getItem('jwtToken'); 

  const handleResetPassword = async (event) => {
    event.preventDefault();
 
    try {
      const response = await axios.post('/api/forgot-password', { email }, {
        headers: {
          'Authorization': `Bearer ${token}` 
        }
      });
      
      if (response.data.status === 'success') {
        alert('Şifre sıfırlama bağlantısı e-posta adresinize gönderildi.');
        window.location = "/reset-password"; 
      } else {
        alert('Bir hata oluştu. Lütfen tekrar deneyin.');
      }
    } catch (error) {
      console.error('Bir hata oluştu:', error);
    }
  };

  return (
    <div className='bodyDiv'>
      <h2 className='Forgoth2'>Şifremi Unuttum</h2>
      <form className='form' onSubmit={handleResetPassword}>
        <label className='formlabel'>
         
          <div className="Forms">
            <TextField fullWidth sx={{ m: 1 }}
              required
              id="fullWidth"
              label="Email"
              type="email"
              size="small"
              onChange={(e) => setEmail(e.target.value)}

            /> <FormHelperText>Email Adresinizi Giriniz.</FormHelperText></div>
        
        </label>
        <input  className="inputsubmit " type="submit" value="Şifre Sıfırla"onClick={() => window.location.href="/reset-password"}/>
      </form>
    </div>
  );
}

export default ForgotPasswordPage;
