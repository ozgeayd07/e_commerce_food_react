import React, { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import '../styles/account.css'


function Account() {

  const [confirmPassword, setConfirmPassword] = useState("");
  const [accountType, setAccountType] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickConfirmPassword = () => setConfirmPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  const handleChange = (event) => {
    setAccountType(event.target.value);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    if (showPassword !== confirmPassword) {
      alert("Şifreler eşleşmiyor!");
      return;
    }

  };

  return (
   
    <div className="bodyAccount">
      <form className="formAccount" onSubmit={handleRegister}>
        <div className="fields">
        <label>
          <div className="Forms">
            <TextField sx={{ m: 1, width: '25ch' }}
              required
              id="outlined-required"
              label="Adınız"
              size="small"

            />
            <FormHelperText>Adınızı Giriniz.</FormHelperText></div>
        </label>
        <label>
          <div className="Forms">
            <TextField sx={{ m: 1, width: '25ch' }}
              required
              id="outlined-required"
              label="Soyadınız"
              size="small"

            /> <FormHelperText>Soyadınızı Giriniz.</FormHelperText></div>

        </label>
        <label>
          <div className="Forms">
            <TextField
              required
              id="outlined-required"
              label="Email"
              type="email"
              size="small"

            /> <FormHelperText>Email Adresinizi Giriniz.</FormHelperText></div>
        </label>
        </div>
     
        <div className="fields">
        <label>
         <div  className="Forms">
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" >
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
            />
            <FormHelperText>Şifrenizi Giriniz.</FormHelperText>
          </FormControl>
          </div>
        </label>
        <label>
          <div  className="Forms"> 
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" >
            <InputLabel htmlFor="outlined-adornment-password">Şifrenizi Tekrar Giriniz</InputLabel>
            <OutlinedInput

              id="outlined-adornment-password"
              type={confirmPassword ? 'text' : 'password'}

              endAdornment={
                <InputAdornment position="end">
                  <IconButton

                    aria-label="toggle password visibility"
                    onClick={handleClickConfirmPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"

                  >
                    {confirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Şifrenizi Tekrar Giriniz"
              size="small"

            />
            <FormHelperText>Şifrenizi Tekrar Giriniz</FormHelperText>
          </FormControl>
          </div>
          
        </label>
        </div>
        <label>
          <div  className="Forms">
          <FormControl required sx={{ m: 1, minWidth: 120 }} >
            <InputLabel id="demo-simple-select-required-label">Hesap Tipi</InputLabel>
            <Select
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required"
              value={accountType}
              label="Hesap Tipi *"
              onChange={handleChange}
              size="small"

            >

              <MenuItem value={1}>Kullanıcı</MenuItem>
              <MenuItem value={0}>Restoran</MenuItem>

            </Select>
            <FormHelperText>Hesap Tipi Seçiniz.</FormHelperText>
          </FormControl>
          </div>
        </label>
          <input   className="inputsub"type="submit" value="Hesap Oluştur"/>
      </form>
    </div>
   
  );
}

export default Account;
