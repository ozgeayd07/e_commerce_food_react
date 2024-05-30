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
import Alert from '@mui/material/Alert';
import { useMutation } from '@apollo/client';
import '../styles/account.css';
import { USER_ADD } from '../GraphQL/mutation';
import { useNavigate } from "react-router-dom";

function Account() {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    isim: "",
    soyisim: "",
    email: "",
    sifre: "",
    hesapTipi: "",
    telefonNo: ""
  });
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();

  const [addUser, { loading, error }] = useMutation(USER_ADD);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    if (formData.sifre !== confirmPassword) {
      setAlert({ type: 'error', message: "Şifreler eşleşmiyor!" });
      return;
    }

    try {
      await addUser({
        variables: {
          input: {
            isim: formData.isim,
            soyisim: formData.soyisim,
            email: formData.email,
            sifre: formData.sifre,
            hesapTipi: formData.hesapTipi,
            telefonNo: formData.telefonNo
          }
        }
      });
      setAlert({ type: 'success', message: "Hesap başarıyla oluşturuldu!" });
      navigate.push('/');
    } catch (err) {
      console.error(err);
      setAlert({ type: 'error', message: "Hesap oluşturulurken bir hata oluştu." });
    }
  };

  return (
    <div className="bodyAccount">
      {alert && (
        <Alert severity={alert.type} onClose={() => setAlert(null)}>
          {alert.message}
        </Alert>
      )}
      <form className="formAccount" onSubmit={handleRegister}>
        <div className="fields">
          <label>
            <div className="Forms">
              <TextField
                sx={{ m: 1, width: '25ch' }}
                required
                id="outlined-required"
                label="Adınız"
                size="small"
                name="isim"
                value={formData.isim}
                onChange={handleFormChange}
              />
              <FormHelperText>Adınızı Giriniz.</FormHelperText>
            </div>
          </label>
          <label>
            <div className="Forms">
              <TextField
                sx={{ m: 1, width: '25ch' }}
                required
                id="outlined-required"
                label="Soyadınız"
                size="small"
                name="soyisim"
                value={formData.soyisim}
                onChange={handleFormChange}
              />
              <FormHelperText>Soyadınızı Giriniz.</FormHelperText>
            </div>
          </label>
          <label>
            <div className="Forms">
              <TextField
                required
                id="outlined-required"
                label="Email"
                type="email"
                size="small"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
              />
              <FormHelperText>Email Adresinizi Giriniz.</FormHelperText>
            </div>
          </label>
        </div>
        <div className="fields">
          <label>
            <div className="Forms">
              <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Şifre Giriniz</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  name="sifre"
                  value={formData.sifre}
                  onChange={handleFormChange}
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
            <div className="Forms">
              <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Şifrenizi Tekrar Giriniz</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setConfirmPassword((show) => !show)}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
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
        <div className="fields">
          <label>
            <div className="Forms">
              <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-phoneNumber">Telefon Numaranızı Giriniz</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-phoneNumber"
                  type="tel"
                  name="telefonNo"
                  value={formData.telefonNo}
                  onChange={handleFormChange}
                  label="Telefon Numaranızı Giriniz"
                  size="small"
                />
                <FormHelperText>Telefon Numaranızı Giriniz</FormHelperText>
              </FormControl>
            </div>
          </label>
        </div>
        <FormControl required sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-required-label">Hesap Tipi</InputLabel>
          <Select
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            value={formData.hesapTipi}
            label="Hesap Tipi *"
            name="hesapTipi"
            onChange={handleFormChange}
            size="small"
          >
            <MenuItem value={1}>KULLANICI</MenuItem>
            <MenuItem value={0}>RESTORAN</MenuItem>
          </Select>
          <FormHelperText>Hesap Tipi Seçiniz.</FormHelperText>
        </FormControl>
        <input className="inputsub" type="submit" value="Hesap Oluştur" disabled={loading} />
      </form>
      {error && (
        <Alert severity="error" onClose={() => setAlert(null)}>
          Hesap oluşturulurken bir hata oluştu: {error.message}
        </Alert>
      )}
    </div>
  );
}

export default Account;
