import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { GET_RESTAURANTS, GET_PRODUCTS_BY_RESTAURANT } from '../GraphQL/queries';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { addToCart } from '../cartSlice/cartSlice';

function RestaurantDetail() {
  const { id } = useParams();

  const { loading: restaurantLoading, error: restaurantError, data: restaurantData } = useQuery(GET_RESTAURANTS, {
    variables: { id },
  });

  const { loading: productsLoading, error: productsError, data: productsData } = useQuery(GET_PRODUCTS_BY_RESTAURANT, {
    variables: { id },
  });

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  if (restaurantLoading || productsLoading) return 'Loading...';
  if (restaurantError) return `Error! ${restaurantError.message}`;
  if (productsError) return `Error! ${productsError.message}`;

  if (!restaurantData || !restaurantData.restoranlar) return 'Restoran verisi bulunamadı';
  if (!productsData || !productsData.urunler) return 'Ürün verisi bulunamadı';

  const restoran = restaurantData.restoranlar.find((resto) => resto.id === id);

  if (!restoran) return 'Restoran verisi bulunamadı';

  const categories = [...new Set(productsData.urunler.map((product) => product.category.name))];

  const groupedProducts = categories.map((category) => ({
    category,
    products: productsData.urunler.filter((product) => product.category.name === category),
  }));

  return (
    <div>
      <h2>{restoran.name}</h2>
      <p>Adres: {restoran.adres}</p>
      <p>Açılış ve Kapanış Saatleri: {restoran.acilisSaati} - {restoran.kapanisSaati}</p>
      <p>Email: {restoran.email}</p>
      <Rating name="read-only" value={restoran.puan} readOnly />
      <img src={restoran.resim} alt={restoran.name} />
      <p>Minimum Sipariş Tutarı: {restoran.minTutar}₺</p>
      <h4>Yiyecek ve İçecekler</h4>
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Tabs value={value} onChange={handleChange} centered>
          {categories.map((category, index) => (
            <Tab key={index} label={category} />
          ))}
        </Tabs>
      </Box>
      <Grid container spacing={4}>
        {groupedProducts[value].products.map((product) => (
          <Grid item key={product.urunId} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.danger">
                  Fiyat: {product.fiyat}₺
                </Typography>
                <Typography variant="body2" color="text.danger">
                  Ürün Detayı: {product.detay}
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton style={{ padding: 0 }} onClick={() => handleAddToCart(product)} disableElevation>
                  <ControlPointIcon style={{ fontSize: 50, color: 'red' }} />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default RestaurantDetail;
