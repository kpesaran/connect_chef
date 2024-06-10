import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

import PostInfoCard from './SelectedPost';
import DisplayedPosts from './DisplayedPosts';

import { APIProvider, Map, Marker, InfoWindow, useMap} from '@vis.gl/react-google-maps';

import './styles.css';
import { info } from 'console';
import { Post } from '../../interfaces';

interface MapHookComponentProp {
  posts : Post[]
}


const MapHookComponent:React.FC<MapHookComponentProp> = ({posts}) => {
  const map = useMap();
  const [bounds, setBounds] = useState(undefined)
  console.log(map)
  console.log(bounds)
  useEffect(() => {
    if (!map) return;
    map.addListener('bounds_changed', () => {
      setBounds(map.getBounds())
    })
  }, [map]);

  const displayedPosts = posts.filter(post => {
    if (!bounds || !post.lat || !post.lng) {
      return false
    }
    const postLatLng = new google.maps.LatLng(post.lat, post.lng)
    return bounds.contains(postLatLng)
  })

  return <><DisplayedPosts posts={displayedPosts}/></>;
};

export default function MapDisplay()
{
  const [posts, setPosts] = useState([]);
  // const [infoCardVisible, setInfoCardVisible] = useState(false);
  const [selectedPost, setSelectedPost] = useState({});



  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoint = `http://localhost:3001/api/v1/postings?`;
        const token = localStorage.getItem('token')
        const response = await axios.get(endpoint, {
          headers: {
          Authorization : `Bearer ${token}`
        }});
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

  return (
    <>
      <div className='map-container mt-12'>
        <APIProvider apiKey=''>
          <div className='flex justify-around'>
            <Map
              style={{ width: '60vw', height: '85vh' }}
              defaultCenter={{ lat: 22.54992, lng: 0 }}
              defaultZoom={3}
              gestureHandling={'greedy'}
              disableDefaultUI={true}
            >
              
              {posts.map((post) => (
            
                <div key ={post._id}>
                <Marker
                  onClick={() => handleMarkerClick(post)}
                  position={{ lat: post.lat, lng: post.lng }}
                />
                {selectedPost && selectedPost._id === post._id && (
                  <InfoWindow position={{ lat: post.lat, lng: post.lng }}>
                    {/* Content of InfoWindow goes here, e.g., details about the post */}
                      <div className='flex flex-col justify-center'>
                        <h3>{post.title}</h3>
                        <img style ={{width: '100px'}} src={post.picUrl}></img>
                      <p>{post.body}</p>
                    </div>
                  </InfoWindow>
                )}
              </div>
              ))}
            
            </Map>
            <MapHookComponent posts = {posts} />
            
         
          </div>
          
        </APIProvider>
      </div>
      {/* <div>
        {infoCardVisible ? (
          <div className='' onClick={() => handleMarkerClick({})}>
            <PostInfoCard post={selectedPost} />
          </div>
        ) : (
          <h3>Click a Marker to display a post</h3>
        )}
      </div> */}
    </>
  );
}

// https://developers.google.com/maps/documentation/javascript/reference/map#Map

// https://developers.google.com/maps/documentation/javascript/events

// https://developers.google.com/maps/documentation/javascript/reference/coordinates#LatLngBounds


// create a map bounds variable- this state should be at the least common ancestor of whatever is holding the postings  