import React from 'react'
import Header from '../image/header.png'
import { Button } from 'primereact/button';
import Category from './Category';
import Restaurant from './Restaurant'
import { useNavigate } from 'react-router-dom';
import '../styles/HomeStyles.css';
import { Typography } from '@mui/material';



function Home() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/all');
  };
  return (
    <>
       <header>
      <div className='İmageHeader'>
        <img src={Header} alt='header' />
        </div>
        <Typography className='mainPage'>
          <h1>Lezzet <span className='mainPageSpan'>Bir Tık Uzağınızda!</span></h1>
        </Typography>
        <Typography className='mainPage2'>
          <h2>En sevdiğiniz yemekleri, kapınıza getiriyoruz.
            <br />Sipariş vermek için hemen tıklayın!</h2>
        </Typography>
        <Button className="HeaderButton" label="Sipariş Ver" severity="danger" onClick={handleButtonClick} />
        </header>
      <body>
      <section>
        <Category />
      </section>
      <section>
        <Restaurant />
      </section>
      </body>
    </>

  )
}

export default Home;
