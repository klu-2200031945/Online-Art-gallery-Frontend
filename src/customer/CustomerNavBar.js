import React from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import './customernavbar.css';
import CustomerHome from "./CustomerHome"
import CustomerGallery from "./CustomerGallery"
import CustomerProfile from "./CustomerProfile"
import ViewArt from './ViewArt';
import ChangeCustomerPassword from './ChangeCustomerPassword';
import UpdateCustomerProfile from './UpdateCustomerProfile';
import Payment from './Payment';
import PageNotFound from "./PageNotFound"

export default function CustomerNavBar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('isCustomerLoggedIn');
    localStorage.removeItem('customer');
    navigate('/');
    window.location.reload()
  };

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
        &nbsp;&nbsp;&nbsp;&nbsp;<Link to='/' className='navbar-logo'>
            KALASTHALI
            <i class='fab fa-typo3' />
          </Link>
          <ul id='customernavbar_ul'>
            <li className='nav-item'>
              <Link to='/customerhome' className='nav-links'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/customergallery'
                className='nav-links'
              >
                Gallery
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/customerprofile'
                className='nav-links'
              >
                Profile
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/changecustomerpassword'
                className='nav-links'
              >
                Change Password
              </Link>
            </li>
            <li className='nav-item'>
              <Link
              onClick={handleLogout}
                className='nav-links'
              >
                LogOut
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
      <Route path='/customerhome' element={<CustomerHome/>}/>
      <Route path='/customergallery' element={<CustomerGallery/>}/>
      <Route path='/customerprofile' element={<CustomerProfile/>}/>
      <Route path='/viewart/:artId' element={<ViewArt/>}/>
      <Route path='/changecustomerpassword' element={<ChangeCustomerPassword/>}/>
      <Route path='/updatecustomerprofile' element={<UpdateCustomerProfile/>}/>
      <Route path='/payment' element={<Payment/>}/>
      <Route path="*" element={<PageNotFound/>} exact />
      </Routes>
    </>
  )
}
