import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import '../styles/Login.css'
import { useMutation } from '@apollo/client';
import { LOGIN } from '../GraphQL/mutation';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [login] = useMutation(LOGIN);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({ variables: { email, password } });
      console.log("Giriş yapıldı: ", data.login);
      navigate('/profile');
    } catch (error) {
      console.error("Giriş hatası: ", error);
    }
  };

  return (
    <div className="body">
      <h2 className="Loginh2">Login</h2>
      <form className="formLogin" onSubmit={handleLogin}>
        <label>
          <div className="Forms">
            <TextField
              required
              id="outlined-required"
              label="Email"
              type="email"
              size="small"
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormHelperText>Email Adresinizi Giriniz.</FormHelperText>
          </div>
        </label>
        <label>
          <div className="Forms">
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Şifre Giriniz</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Şifre Giriniz"
                size="small"
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormHelperText>Şifrenizi Giriniz.</FormHelperText>
            </FormControl>
          </div>
        </label>
        <input className="submit" type="submit" href="/" value="Giriş Yap" />
        <p>
          <a className="link" href="/forgot-password">Şifremi Unuttum</a>
        </p>
        <p>
          Hesabınız yok mu? <a className="link" href="/account">Hesap Oluşturun</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
