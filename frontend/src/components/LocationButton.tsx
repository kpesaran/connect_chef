import React, { useEffect, useState } from 'react';
import axios from "axios"

const LocationComponent = () => {

    const [data, setData] = useState(null)


    // const [latitude, setLatitude] = useState<number | null>(null);
    // const [longitude, setLongitude] = useState<number | null>(null);
    
    const getLocation = () => {
        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser")
            return
        }
        navigator.geolocation.getCurrentPosition(success, error);
      

 
    }
    const success = async (position) => {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        const coordData = {
            latitude, 
            longitude
        }
        const endpoint = 'http://localhost:3001/api/v1/reverse-geocode'
        const response = await axios.post(endpoint, coordData )
        console.log(response)
        setData(response.data.results[0].formatted_address)
    }
    const error = () => {
        alert("unable to retrieve location")
    }

    // async function fetchGeoCode() {
    //   if (latitude && longitude) {
    //     const response = await axios()
    //   }
  
    // }
    // useEffect(() => {
    //   if ('geolocation' in navigator) {
    //     console.log('Geolocation is available');
    //     navigator.geolocation.getCurrentPosition((position) => {
    //       // console.log('Latitude is: ', position.coords.latitude);
    //       setLatitude(position.coords.latitude);
  
    //       setLongitude(position.coords.longitude);
    //     });
    //   }
    // });
    return (
      <div className = "flex gap-5 allign-items">
        {/* <p>Latitude: {latitude}</p>
        <p>Longitude:{longitude}</p> */}
            <button onClick={getLocation}>Get Current Location</button>
            <p>{ data}</p>
      </div>
      
    );
  };
  
  export default LocationComponent