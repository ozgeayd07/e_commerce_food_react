import React from 'react';
import { Navbar, NavLink, Badge } from 'reactstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom'
import '../styles/Navbar.css'
import logo from '../image/food.png'
import userLogo from '../image/userlogo.png'
import { useSelector } from 'react-redux';

export default function NavBar() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const navigate = useNavigate();

  const handleUserLogoClick = () => {
    navigate("/login");
  };



  return (
    <>
      <div className='navbar'>
        <div className='main'>
          <img src={logo} alt="" />
        </div>
        <Navbar className='mainLink'>
          <Link to="/">
            Anasayfa
          </Link>
          <Link to="/contact">
            İletişim
          </Link>
          <NavLink className='navicon' >
            <Link to="/cart">
            <FaShoppingCart />
              <Badge color="white"showZero>{totalItems}</Badge>
            </Link>
            <img className="user-logo" src={userLogo} alt="Kullanıcı" onClick={handleUserLogoClick} />
            <button className='navbutton' href="/logout">Oturumu Kapat</button>
          </NavLink>
        </Navbar>
      </div>
    </>
  );
}