// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css'
const NavBar = () => {
  return (
    <nav>
      <ul className='links-container flex gap-20 '>
        <li>
          <Link to='/'>Home</Link>
              </li>

        <li>
          <Link to='/map'>Map</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
