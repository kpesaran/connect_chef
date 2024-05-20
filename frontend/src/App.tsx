import React, { useEffect, useState, useContext } from 'react';
import './App.css';


import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// import ZipCodeForm from './components/ZipCodeForm';
// import LocationButton from './components/LocationButton';

import PostForm from './components/post-form/PostForm';
import PostContainer from './components/posts/PostContainer';
import Home from './pages/home';

//import Page1 from "./pages/page-1"
import MapPage from './pages/Map';
import Layout from './Layout';
import AnalyticsPage from './pages/AnalyticsPage';
import GlobalDashboard from './components/analytics/global/GlobalDashboard';
import Register from './pages/register';
import Login from './pages/login';
import CountryDashboard from './components/analytics/country/CountryDashboard';

function App() {


  return (
    <>
      {/* Set up useContext here  */}
      
      <Router>
        <Routes>
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />

            {/* <Route path='/login' element={<Login />} /> */}
            <Route path='/map/' element={<MapPage />} />
            <Route path='analytics' element={<AnalyticsPage />}>
              <Route path='country' element={<CountryDashboard />} />
              <Route path='globe' element={<GlobalDashboard />} />
            </Route>
          </Route>
        </Routes>
      </Router>
      {/* <NavBar/> */}
      {/* <NavBar /> */}

      {/* <h1 className='text-4xl font-bold font-sans p-8'>App</h1> */}
    </>
  );
}

export default App;
