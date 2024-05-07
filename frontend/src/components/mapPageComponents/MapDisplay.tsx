import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

import PostInfoCard from './SelectedPost';

import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

import './styles.css';
import { info } from 'console';

export default function MapDisplay() {
  const [posts, setPosts] = useState([]);
  const [infoCardVisible, setInfoCardVisible] = useState(false);
  const [selectedPost, setSelectedPost] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoint = `http://localhost:3001/api/v1/postings?`;
        const response = await axios.get(endpoint);
        console.log(response.data);
        setPosts(response.data);
      } catch (error) {
        console.error('failed to get posts:', error);
      }
    };
    fetchData();
  }, []);

  const handleMarkerClick = (post) => {
    setSelectedPost(post);
    if (Object.keys(post).length === 0) {
      setInfoCardVisible(false);
    } else setInfoCardVisible(true);
  };

  console.log(selectedPost);
  console.log(infoCardVisible);
  return (
    <>
      <div className='map-container'>
        <APIProvider apiKey=''>
          <Map
            style={{ width: '50vw', height: '75vh' }}
            defaultCenter={{ lat: 22.54992, lng: 0 }}
            defaultZoom={2}
            gestureHandling={'greedy'}
            disableDefaultUI={true}
          >
            {posts.map((post) => (
              <Marker
                key={post._id}
                onClick={() => handleMarkerClick(post)}
                position={{ lat: post.lat, lng: post.lng }}
              />
            ))}
          </Map>
        </APIProvider>
      </div>
      <div>
        {infoCardVisible ? (
          <div className='' onClick={() => handleMarkerClick({})}>
            <PostInfoCard post={selectedPost} />
          </div>
        ) : (
          <h3>Click a Marker to display a post</h3>
        )}
      </div>
    </>
  );
}
