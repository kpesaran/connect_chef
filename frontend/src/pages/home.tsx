import React, { useEffect, useState } from 'react';
import ZipCodeForm from '../components/ZipCodeForm';
import PostForm from '../components/PostForm';
import PostContainer from '../components/posts/PostContainer';

export default function Home() {
  const [showForm, setShowForm] = useState(false);

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

      {showForm && <PostForm />}

      {/* <button onClick = {getLocation}></button>
      <LocationComponent /> */}
      {/* <LocationButton /> */}
      <button className='mb-4 hover:: 0' onClick={() => setShowForm(!showForm)}>
        Make Post{' '}
      </button>
      <PostContainer />
      <ZipCodeForm />
    </>
  );
}
