// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css'
const NavBar = () => {
  return (
    <nav className='border'>
      <h1 className='text-4xl font-bold font-sans p-8'>App</h1>
      <ul className='links-container flex gap-20 p-5 '>
        <li>
          <Link to='/'>Home</Link>
              </li>

        <li>
          <Link to='/map'>Map</Link>
        </li>
        {/* <li>
          <Link to='/login'>Login</Link>
        </li> */}
        <li>
          <Link to='/analytics'>Analytics</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
