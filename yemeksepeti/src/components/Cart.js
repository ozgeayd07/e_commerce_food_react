import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../cartSlice/cartSlice';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS_BY_RESTAURANT} from '../GraphQL/queries';
import { Container, Typography, List, ListItem, ListItemText, Button, Box, Paper, Divider, ListItemAvatar, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const navigate = useNavigate();

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };

    const handleIncrease = (id) => {
        dispatch(increaseQuantity(id));
    };

    const handleDecrease = (id) => {
        dispatch(decreaseQuantity(id));
    };

    const { loading, error, data } = useQuery(GET_PRODUCTS_BY_RESTAURANT);

    if (loading) return <Typography>Loading...</Typography>;
    if (error) return <Typography>Error :(</Typography>;

    const products = data?.urunler || [];

    let total = cartItems.reduce((acc, item) => {
        const product = products.find((prod) => prod.id === item.id);
        return acc + (product ? product.fiyat * item.quantity : 0);
    }, 0);

    const handleCompleteOrder = () => {

        navigate('/payments');
    };

    return (
        <Container maxWidth="md">
            <Paper elevation={3} sx={{ padding: 2, marginTop: 4 }}>
                <Typography variant="h4" gutterBottom>Sepet Sayfası</Typography>
                {cartItems.length === 0 ? (
                    <Typography>Sepetinizde ürün bulunmamaktadır.</Typography>
                ) : (
                    <>
                        <Typography variant="h5" gutterBottom>Ürünler</Typography>
                        <List>
                            {cartItems.map((item) => {
                                const product = products.find((prod) => prod.id === item.id);
                                if (!product) return null;

                                return (
                                    <React.Fragment key={item.id}>
                                        <ListItem alignItems="flex-start">
                                            <ListItemAvatar>
                                                <Avatar alt={product.name} src={product.image} />
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={`${product.name} - ${product.fiyat}₺`}
                                                secondary={`Adet: ${item.quantity}`}
                                            />
                                            <Box sx={{ marginTop: 1, '& > *': { margin: '5px' } }}>
                                                <Button onClick={() => handleIncrease(item.id)} variant="contained" color="error">+</Button>
                                                <Button onClick={() => handleDecrease(item.id)} variant="contained" color="error">-</Button>
                                                <Button onClick={() => handleRemove(item.id)} variant="contained" color="error">X</Button>
                                            </Box>
                                        </ListItem>
                                        <Divider component="li" />
                                    </React.Fragment>
                                );
                            })}
                        </List>
                        <Typography variant="h6" sx={{ marginTop: 2 }}>Toplam Fiyat: {total.toFixed(2)}₺</Typography>
                        <Button onClick={handleCompleteOrder} variant="contained" color="error" sx={{ marginTop: -5, float: 'right' }}>
                            Siparişi Tamamlayın
                        </Button>

                    </>
                )}
            </Paper>
        </Container>
    );
};

export default Cart;
