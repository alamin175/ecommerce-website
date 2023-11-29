import React, { useContext } from 'react';
import './header.css'
import logo from '../../images/Logo.svg'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/AuthContext';

const Header = () => {
    const { user, logOut } = useContext(UserContext)
    const handleLogout = () => {
        logOut()
        .then(() => {})
        .catch(error => console.log(error.message))
    }
    return (
        <nav className='header'>
            <img src= {logo} alt="" />
            <div className='link'>
                <Link to="/">Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/inventory">Inventory</Link>
                {
                    !user && <Link to='/login'>Login</Link>
                }
                
                {
                    !user && <Link to="/signup">Signup</Link> 
                }
                {
                    user && <span className='user'> <small> {user.email}  <Link to='login'><button onClick={handleLogout}>SignOut</button></Link></small> </span>
                }
            </div>
        </nav>
    );
};

export default Header;