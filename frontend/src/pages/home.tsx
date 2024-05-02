import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostForm from '../components/post-form/PostForm';
import PostContainer from '../components/posts/PostContainer';
import fetchLocationData from '../utilities/locationUtils';

export default function Home() {
  const [location, setLocation] = useState({});

  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('neighborhood');

  // const [locationProvided, setLocationProvided] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    try {
      // use location data to make your api requests
      const locationVal = location[filter]
      
      const locationQuery = `${filter}=${locationVal}`
      console.log(locationQuery)
      let endpoint = `http://localhost:3001/api/v1/postings?` 
      if (locationVal) {
        endpoint = endpoint + locationQuery
      }
      const response = await axios.get(endpoint);
      console.log(response.data);

      if (searchTerm != '')  {
        const searchTermLowerCase = searchTerm.toLowerCase();

        const postsToDisplay = response.data.filter(
          (post) =>
            post.title && post.title.toLowerCase().includes(searchTermLowerCase)
        );

        setPosts([...postsToDisplay]);
        return;
      }

      setPosts(response.data);
    } catch (error) {
      console.error('failed to get posts:', error);
    }
  };

 
  function handleFilterChange(newFilter) {
    setFilter(newFilter);
  }
  function handleSearchChange(newTerm) {
    setSearchTerm(newTerm);
  }

  useEffect(() => {
    async function getLocation() {
      try {
        const locationData = await fetchLocationData();
        console.log(locationData);
        setLocation({ ...locationData });
        console.log(JSON.stringify(locationData))
        localStorage.setItem('location', JSON.stringify(locationData))
        
      } catch (err) {
        console.error('Error fetching location:', err);
      }
    }
    const storedLocation = localStorage.getItem('location')
    console.log(JSON.parse(storedLocation))

    if (storedLocation) {
      const storedLocationObj = JSON.parse(storedLocation)
      setLocation({ ...storedLocationObj })
      
    }
    else {
      getLocation();
    }
  }, []);


  useEffect(() => {
    fetchData();
  }, [searchTerm, filter]);


  console.log(filter)
  return (
    <>
      <h1 className='text-4xl font-bold font-sans p-8'>App</h1>

      <div>
        {showForm && <PostForm location={location} onCreatePost={fetchData} />}

        <button
          className='mb-4 hover:: 0'
          onClick={() => setShowForm(!showForm)}
        >
          Make Post{' '}
        </button>
        <div>Location: {location.neighborhood}</div>
        <div></div>
        <PostContainer
          posts={posts}
          location={location}
          onSearch={handleSearchChange}
          onFilterChange={handleFilterChange} />
        {/* <ZipCodeForm /> */}
      </div>
    </>
  );
}


