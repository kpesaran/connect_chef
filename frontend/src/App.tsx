import React, { useEffect, useState } from 'react';
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
import GlobalAnalytics from './components/analytics/country/charts/test/GlobalAnalytics';
import CountryAnalytics from './components/analytics/country/charts/test/CountryAnalytics';
import Register from './pages/register';
import Login from './pages/login';

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
              <Route path='country' element={<CountryAnalytics />} />
              <Route path='globe' element={<GlobalAnalytics />} />
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
