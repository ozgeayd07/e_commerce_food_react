import React, { useState, useEffect } from 'react';
import { Grid, Card, Button, styled } from '@mui/material';
import Rating from '@mui/material/Rating';
import { useQuery } from '@apollo/client';
import { GET_RESTAURANTS } from '../GraphQL/queries';
import { Link } from 'react-router-dom';

const theme = {
  primaryColor: '#861b28',
  secondaryColor: '#fde4e4',
  textColor: 'red',
};
const CategoryLink = styled(Button)({
  color: theme.primaryColor,
  margin: '0.5em',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

const SelectedCard = styled(Card)({
  backgroundColor: theme.secondaryColor,
  padding: '1em',
  margin: '1em 0',
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
});

const RestaurantCard = styled(Card)({
  margin: '1em',
  padding: '1em',
  width: '250px',
  height: '250px',
  justifyContent: 'space-around',
});
const StyledLink = styled(Link)({
  textDecoration: 'none',
});

function Restaurant() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const { loading: restaurantLoading, error: restaurantError, data: restaurantsData } = useQuery(GET_RESTAURANTS);

  useEffect(() => {
    if (restaurantsData && restaurantsData.restoranlar.length > 0) {
      setSelectedCategory(restaurantsData.restoranlar[0].category);
    }
  }, [restaurantsData]);

  if (restaurantLoading) return 'Loading...';
  if (restaurantError) return `Error! ${restaurantError?.message}`;

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  console.log(restaurantsData)

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h2 style={{ color: theme.primaryColor, textAlign:"center" }}>RESTORANLAR</h2>
        <Grid container item xs={12} spacing={2} justifyContent="center">
          {restaurantsData.restoranlar.map((restaurant) => (
            <Grid item>
              <CategoryLink
                key={restaurant.id}
                onClick={() => handleCategoryClick(restaurant.category)}
              >
                {restaurant.category}
              </CategoryLink>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        {selectedCategory && (
          <SelectedCard>
            <Grid container spacing={2}>
              {restaurantsData.restoranlar.filter(restaurant => restaurant.category === selectedCategory).map((restaurant) => (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <StyledLink key={restaurant.id} to={`/RestaurantDetail/${restaurant.id}`}>
                    <RestaurantCard>
                      <img src={restaurant?.resim} alt={restaurant.name} />
                      
                      <p>Açılış ve Kapanış Saatleri: {restaurant.acilisSaati} - {restaurant.kapanisSaati}</p>
                      <Rating name="read-only" value={restaurant.puan} readOnly />
                      <p>Minimum Sipariş Tutarı: {restaurant.minTutar}₺</p>
                    </RestaurantCard>
                  </StyledLink>
                </Grid>
              ))}
            </Grid>
          </SelectedCard>
        )}
      </Grid>
    </Grid>
  );
}


export default Restaurant;
