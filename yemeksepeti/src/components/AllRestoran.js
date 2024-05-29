import React from 'react';
import { Grid, Card, CardContent, Typography, styled } from '@mui/material';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { GET_RESTAURANTS } from '../GraphQL/queries';

const StyledCard = styled(Card)({
  backgroundColor: '#f8f8f8',
  '&:hover': {
    transform: 'scale(1.02)',
    transition: 'transform 0.2s',
  },
});

const StyledImg = styled('img')({
  width: '100%',
  height: '150px',
  objectFit: 'cover',
});

function AllRestaurant() {
  const { loading, error, data } = useQuery(GET_RESTAURANTS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <h2>Tüm Restoranlar</h2>
      <Grid container spacing={2}>
        {data.restoranlar.map((restaurant) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={restaurant.id}>
            <Link to={`/RestaurantDetail/${restaurant.id}`} style={{ textDecoration: 'none' }}>
              <StyledCard>
                <StyledImg src={restaurant.image} alt={restaurant.name} />
                <CardContent>
                  <Typography variant="h5">{restaurant.name}</Typography>
                  <Typography variant="body2">{restaurant.description}</Typography>
                </CardContent>
              </StyledCard>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default AllRestaurant;
