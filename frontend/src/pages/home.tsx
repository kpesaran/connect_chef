import React, { useEffect, useState } from 'react';
import ZipCodeForm from '../components/ZipCodeForm';
import PostForm from '../components/PostForm';
import PostContainer from '../components/posts/PostContainer';
import ChooseLocation from '../components/ChooseLocation/ChooseLocation';
import fetchLocationData from '../utilities/locationUtils';

export default function Home() {
  const [location, setLocation] = useState({});
  const [locationProvided, setLocationProvided] = useState(true);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    async function getLocation() {
      try {
        const locationData = await fetchLocationData();
        console.log(locationData);
        setLocation({ ...locationData });
      } catch (err) {
        console.error('Error fetching location:', err);
      }
    }
      getLocation()
  }, []);

  return (
    <>
      {/* <NavBar />  */}
      <h1 className='text-4xl font-bold font-sans p-8'>App</h1>
      {/* Later fetch data from the api to display the number of zipcodes stored */}
      {/* <div className='card text-4xl'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}

      {!locationProvided ? (
        <ChooseLocation />
      ) : (
        <div>
          {showForm && <PostForm />}

          <button
            className='mb-4 hover:: 0'
            onClick={() => setShowForm(!showForm)}
          >
            Make Post{' '}
          </button>
                      <div>Location: {location.neighborhood}</div>
                      <div></div>
          <PostContainer  />
          <ZipCodeForm />
        </div>
      )}
    </>
  );
}
