import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import SellerHome from './SellerHome';
import "./sellernavbar.css"
import SellerProfile from "./SellerProfile"
import AddArt from './AddArt';
import ChangeSellerPassword from './ChangeSellerPassword';
import UpdateSellerProfile from './UpdateSellerProfile';
import PageNotFound from '../customer/PageNotFound';

export default function SellerNavBar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('isSellerLoggedIn');
    localStorage.removeItem('seller');
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
          <ul id='sellernavbar_ul'>
            <li className='nav-item'>
              <Link to='/sellerhome' className='nav-links'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/addart'
                className='nav-links'
              >
                Upload
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/sellerprofile'
                className='nav-links'
              >
                Profile
              </Link>
            </li>            
            <li className='nav-item'>
              <Link
                to='/changesellerpassword'
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
      <Route path='/sellerhome' element={<SellerHome/>}/>
      <Route path='/sellerprofile' element={<SellerProfile/>}/>
      <Route path='/addart' element={<AddArt/>}/>
      <Route path='/changesellerpassword' element={<ChangeSellerPassword/>}/>
      <Route path='/changesellerprofile' element={<UpdateSellerProfile/>}/>
      <Route path="*" element={<PageNotFound/>} exact />
      </Routes>
    </>
  )
}
