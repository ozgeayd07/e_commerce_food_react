import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';

const UserPage = () => {
  const user = useSelector((state) => state.user); 

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>Kullanıcı Sayfası</Typography>
      {user ? (
        <>
          <Typography variant="h5" gutterBottom>{user.name}</Typography>
          <Typography variant="body1" gutterBottom>Email: {user.email}</Typography>
          <Typography variant="body1" gutterBottom>Telefon: {user.phone}</Typography>
          <Typography variant="h6" gutterBottom>Sipariş Geçmişi</Typography>
          <List>
            {user.orders.map((order) => (
              <React.Fragment key={order.id}>
                <ListItem>
                  <ListItemText
                    primary={`Sipariş No: ${order.id}`}
                    secondary={`Tutar: ${order.totalAmount.toFixed(2)}₺`}
                  />
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        </>
      ) : (
        <Typography>Kullanıcı bulunamadı.</Typography>
      )}
    </Container>
  );
};

export default UserPage;

