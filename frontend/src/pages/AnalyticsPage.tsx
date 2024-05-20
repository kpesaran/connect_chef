import axios from 'axios';

import { useEffect, useState } from 'react';
import './styles-dashboard.css';
import { Link, Outlet, useLocation, Navigate } from 'react-router-dom';

export default function AnalyticsPage() {
  const routeLocation = useLocation();

  if (
    routeLocation.pathname === '/analytics' ||
    routeLocation.pathname === '/analytics/'
  ) {
    return <Navigate to='./globe' replace />;
  }

  return (
    <div className='dashboard-page flex flex-col justify-center gap-4'>
      <nav className='flex justify-center gap-8'>
        <Link className='nav-links' to='./globe'>
          Global Dashboard
        </Link>
        <Link className='nav-links' to='./country'>
          Country Dashboard
        </Link>
      </nav>
      <Outlet />
      {/* <CountryView posts ={posts} /> */}
    </div>
  );
}
