import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import AdminHome from './AdminHome';
import "./adminnavbar.css"
import ViewCustomers from './ViewCustomers';
import ViewSellers from './ViewSellers';
import AddCustomer from './AddCustomer';
import AddSeller from './AddSeller';
import ChangePassword from './ChangePassword';
import ViewArts from './ViewArts';
import PageNotFound from '../main/PageNotFound';

export default function AdminNavBar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    localStorage.removeItem('admin');
    navigate('/');
    window.location.reload()
  };

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <ul>
            <li className='nav-item'>
              <Link to='/adminhome' className='nav-links'>
                Admin Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/viewcustomers'
                className='nav-links'
              >
                View Customers
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/viewsellers'
                className='nav-links'
              >
               View Sellers
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/viewarts'
                className='nav-links'
              >
               View Arts
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/addseller'
                className='nav-links'
              >
                Add Sellers
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/addcustomer'
                className='nav-links'
              >
                Add Customers
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/changepassword'
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
      <Route path='/adminhome' element={<AdminHome/>}/>
      <Route path='/viewcustomers' element={<ViewCustomers/>}/>
      <Route path='/viewsellers' element={<ViewSellers/>}/>
      <Route path='/addcustomer' element={<AddCustomer/>}/>
      <Route path='/addseller' element={<AddSeller/>}/>
      <Route path='/logout' element={<handleLogout/>}/>
      <Route path='/changepassword' element={<ChangePassword/>}/>
      <Route path='/viewarts' element={<ViewArts/>}/>
      <Route path="*" element={<PageNotFound/>} exact />
      </Routes>
    </>
  )
}
