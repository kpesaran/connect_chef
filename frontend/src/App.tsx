import React, { useEffect, useState } from 'react';
import './App.css';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// import ZipCodeForm from './components/ZipCodeForm';
// import LocationButton from './components/LocationButton';

import PostForm from './components/PostForm';
import PostContainer from './components/posts/PostContainer';
import Home from './pages/home';
import Login from "./pages/login"
import NavBar from './components/navigation/NavBar';
//import Page1 from "./pages/page-1"

function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          
          <Route path='/login' element={<Login />} />
          {/* <Route path = '/page1' element = {<Page1/>} /> */}
        </Routes>
      </Router>
      {/* <NavBar/> */}
      {/* <NavBar /> */}
      
      {/* <h1 className='text-4xl font-bold font-sans p-8'>App</h1> */}
    </>
  );
}

export default App;
