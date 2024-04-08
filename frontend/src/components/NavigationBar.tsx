import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/newpost">About</Link></li>
                {/* <li><Link to="/posts">Services</Link></li> */}
            </ul>
        </nav>
    )
} 

export default NavBar