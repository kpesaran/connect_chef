import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
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
    </>
  );
}

export default App;
