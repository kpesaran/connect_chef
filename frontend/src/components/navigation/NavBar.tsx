// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../public/logo_1_chef.png'
import './styles.css'
const NavBar = () => {
  return (
    <nav className=' navbar-container flex border  justify-between'>
      <div className='flex gap-4'>
        <img src={logo} className='self-center' style={{width:'100px'}} alt='logo'></img>
        <h1 className='text-4xl font-bold self-start  font-sans pt-4 mt-4 '>CHEF CONNECT</h1>
        
      </div>
      <ul className='links-container flex justify-end  content-end gap-20 mt-16 mr-24'>
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
