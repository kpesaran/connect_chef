import { useEffect, useState } from 'react';
import axios from 'axios';
import PostForm from '../components/post-form/PostForm';
import PostContainer from '../components/posts/PostContainer';
import fetchLocationData from '../utilities/locationUtils';
import './styles.css';
import type { Post } from '../interfaces';
import { LocationClass, LocationFilter } from '../LocationClass';


export default function Home() {
  const [location, setLocation] = useState<LocationClass | null>(null);

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filter, setFilter] = useState<LocationFilter>(LocationFilter.City);
  const [sortOn, setSortOn] = useState<string>('');

  // const [locationProvided, setLocationProvided] = useState(true);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [posts, setPosts] = useState<Post[] | []>([]);
  const [cuisineFilter, setCuisineFilter] = useState<string>('');

  // const [isLoading, setIsLoading] = useState(true)

  const fetchData = async (localLocation: LocationClass) => {
    // setIsLoading(true)
    try {
      // use location data to make your api requests
      const locationVal = localLocation.findLocation(filter);

      let endpoint = `http://localhost:3001/api/v1/postings?`;
      if (locationVal) {
        const locationQuery = `${filter}=${locationVal}`;
        console.log(locationQuery);
        endpoint += locationQuery;
      }
      if (sortOn) {
        let sortQuery;
        if (sortOn === 'views') {
          sortQuery = `sort=views:desc`;
        } else if (sortOn === 'recent') {
          sortQuery = `sort=dateStamp:desc`;
        } else if (sortOn === 'oldest') {
          sortQuery = `sort=dateStamp:asc`;
        }
        if (sortQuery) {
          endpoint += `&${sortQuery}`;
        }
      }
      if (cuisineFilter && cuisineFilter !== 'All') {
        console.log(cuisineFilter);
        endpoint += `&category=${cuisineFilter}`;
      }

      const token = localStorage.getItem('token');

      const response = await axios.get(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);

      if (searchTerm != '') {
        const searchTermLowerCase = searchTerm.toLowerCase();

        const postsToDisplay = response.data.filter(
          (post: Post) =>
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

  function handleCuisineFilterChange(newCuisine: string) {
    setCuisineFilter(newCuisine);
  }
  function handleFilterChange(newFilter: LocationFilter) {
    setFilter(newFilter);
  }
  function handleSearchChange(newTerm: string) {
    setSearchTerm(newTerm);
  }
  function handleSortChange(newSort: string) {
    setSortOn(newSort);
  }
  function updatePostViewCount(updatedPost: Post) {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post._id === updatedPost._id ? updatedPost : post
      )
    );
  }

  function onCloseForm() {
    setShowForm(false);
    console.log(showForm);
  }
  function handleSetShowForm() {
    setShowForm(true);
  }

  useEffect(() => {
    async function getLocation() {
      try {
        const locationData = await fetchLocationData();
        const localLocation = new LocationClass(
          locationData.city,
          locationData.country,
          locationData.county,
          locationData.lat,
          locationData.lng,
          locationData.neighborhood,
          locationData.state,
          locationData.zipcode
        );
        setLocation(localLocation);
        console.log(JSON.stringify(localLocation));
        localStorage.setItem('location', JSON.stringify(localLocation));
        fetchData(localLocation);
      } catch (err) {
        console.error('Error fetching location:', err);
      }
    }
    const storedLocation = localStorage.getItem('location');

    if (storedLocation) {
      const storedLocationObj = JSON.parse(storedLocation);
      const localLocation = new LocationClass(
        storedLocationObj.city,
        storedLocationObj.country,
        storedLocationObj.county,
        storedLocationObj.lat,
        storedLocationObj.lng,
        storedLocationObj.neighborhood,
        storedLocationObj.state,
        storedLocationObj.zipcode
      );
      setLocation(localLocation);
      fetchData(localLocation);
    } else {
      getLocation();
    }
  }, [filter, searchTerm, sortOn, cuisineFilter]);

  return (
    <>
      {/* {isLoading ? <h4>Data is loading...</h4> : */}
      <div>
        {showForm && location ? (
          <PostForm
            location={location}
            onCreatePost={fetchData}
            onCloseForm={onCloseForm}
          />
        ) : (
          <div>
            <div></div>
            {location && (
              <PostContainer
                posts={posts}
                location={location}
                onSearch={handleSearchChange}
                onFilterChange={handleFilterChange}
                setShowForm={handleSetShowForm}
                onSortChange={handleSortChange}
                onCuisineFilterChange={handleCuisineFilterChange}
                fetchPosts={fetchData}
                updatePostViewCount={updatePostViewCount}
              />
            )}
          </div>
        )}
      </div>
    </>
  );
}
