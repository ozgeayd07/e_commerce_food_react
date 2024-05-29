import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import Account from './components/Account';
import ResetPassword from './components/ResetPassword';
import Restaurant from './components/Restaurant';
import Logout from './components/Logout';
import AllRestaurant from './components/AllRestoran';
import Footer from './components/Footer';
import RestaurantDetail from './components/RestaurantDetails';
import Profile from './components/Profile';
import PaymentsPage from './components/PaymentsPage';



function App() {


  return (
   
      <>
      <Navbar/>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/contact" element={<Contact/>}/>  
        <Route path="/login"element={<Login/>}/>
        <Route path='/forgot-password' element={<ForgotPassword/>}/>
        <Route path='/account'element={<Account/>}/>
        <Route path='/reset-password'element={<ResetPassword/>}/>
        <Route path='/restaurant'element={<Restaurant/>}/>
        <Route path="/RestaurantDetail/:id" element={<RestaurantDetail />} />
        <Route path='/profile'element={<Profile/>}/>
        <Route path='/payments'element={<PaymentsPage/>}/>
        <Route path ='/logout'element={<Logout/>}/>
        <Route path='/all'element={<AllRestaurant/>}/>
      </Routes>
      <Footer/>
      </>
    
  );
}

export default App;
