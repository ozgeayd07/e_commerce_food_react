import React from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import Image from '../image/contact.jpg'; 

const ContactPage = () => {
    return (
        <Container maxWidth="md" style={{ display: 'flex', alignItems: 'stretch', marginTop:'100px'}}>
            <Box style={{ flex: 1, marginRight: '20px', boxShadow: '0 3px 5px 2px rgba(165, 28, 48, .3)', padding: '20px' }}>
                <img src={Image} alt="Yemek Sepeti" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
            <Box style={{ flex: 1, boxShadow: '0 3px 5px 2px rgba(165, 28, 48, .3)', padding: '20px' }}>
                <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
                   Bizimle İletişime Geçin
                </Typography>
                <form noValidate autoComplete="off">
                    <TextField label="E-posta" fullWidth margin="normal" />
                    <TextField label="Mesaj" multiline rows={4} fullWidth margin="normal" />
                    <Button type="submit" style={{ backgroundColor: '#a51c30' }} variant="contained" fullWidth>
                        Gönder
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default ContactPage;
