// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../public/logo_1_chef.png'
import './styles.css'
const NavBar = () => {
  return (
    <nav className='flex flex-col border'>
      <img src={logo} className='self-center' style={{width:'100px'}} alt='logo'></img>
      <h1 className='text-4xl font-bold font-sans pt-4'>CHEF CONNECT</h1>
      
      <ul className='links-container flex gap-20 p-2'>
        <li >
          <Link className = 'titles-routes' to='/'>Home</Link>
              </li>

        <li>
          <Link className = 'titles-routes' to='/map'>Map</Link>
        </li>
        {/* <li>
          <Link to='/login'>Login</Link>
        </li> */}
        <li>
          <Link className = 'titles-routes' to='/analytics'>Analytics</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
