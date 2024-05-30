import React from 'react';
import { Container, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <Container maxWidth={false} style={styles.container}>
      <Typography variant="h6" align="center" gutterBottom>
        Yemek E-Ticaret Sitesi
      </Typography>
      <div style={styles.iconContainer}>
        <IconButton color="inherit" style={styles.iconButton}>
          <FacebookIcon />
        </IconButton>
        <IconButton color="inherit" style={styles.iconButton}>
          <InstagramIcon />
        </IconButton>
        <IconButton color="inherit" style={styles.iconButton}>
          <TwitterIcon />
        </IconButton>
      </div>
      <Typography variant="subtitle1" align="center" color="inherit" component="p">
        © 2024 Tüm Hakları Saklıdır
      </Typography>
    </Container>
  );
}

const styles = {
  container: {
    backgroundColor: '#a51c30',
    color: 'white',
    padding: '20px',
    marginTop: '20px',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  iconButton: {
    margin: '0 10px', 
  },
};

export default Footer;
