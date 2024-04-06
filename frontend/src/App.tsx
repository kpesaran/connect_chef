import React, { useEffect, useState } from 'react';
import './App.css';
import ZipCodeForm from './components/ZipCodeForm';
import axios from 'axios';

const LocationComponent = () => {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

  // async function fetchGeoCode() {
  //   if (latitude && longitude) {
  //     const response = await axios()
  //   }

  // }
  useEffect(() => {
    if ('geolocation' in navigator) {
      console.log('Geolation is available');
      navigator.geolocation.getCurrentPosition((position) => {
        // console.log('Latitude is: ', position.coords.latitude);
        setLatitude(position.coords.latitude);

        setLongitude(position.coords.longitude);
      });
    }
  });
  return (
    <div className = "flex gap-5 allign-items">
      <p>Latitude: {latitude}</p>
      <p>Longitude:{longitude}</p>
      <button
      // onClick={fetchGeoCode}
      >
        Use Current Location</button>
    </div>
    
  );
};

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1 className='text-4xl font-bold font-sans p-8'>App</h1>
      {/* Later fetch data from the api to display the number of zipcodes stored */}
      {/* <div className='card text-4xl'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
      <div className='card text-4xl border '>
        <ZipCodeForm />
        
      </div>
      <LocationComponent />
    </>
  );
}

export default App;
