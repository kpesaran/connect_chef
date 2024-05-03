import React, { useEffect, useState ,useCallback } from "react"
import axios from "axios";

import SelectedPost from "./SelectedPost";

import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps'



const apiKeyGoogle = process.env.REACT_APP_GOOGLE_MAPS_API_KEY
export default function MapDisplay() {
  const [posts, setPosts] = useState([])
  const [selectedPost, setSelectedPost] = useState({})
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
  
  const handleSelectedPost = (postId: string) => {
    const selected = posts.find(post => post._id === postId);
    setSelectedPost(selected);
  }

  console.log(selectedPost)
  return (
  <>
    {selectedPost ? <div className ="" onClick = {()=> setSelectedPost({})}>
    
        <SelectedPost post = {selectedPost} />
        
      </div>
        
        : null}
    <APIProvider apiKey={'fill-key'}>
      
      <Map
        style={{ width: '75vw', height: '75vh' }}
        defaultCenter={{ lat: 22.54992, lng: 0 }}
        defaultZoom={2}
        gestureHandling={'greedy'}
        disableDefaultUI={true}>
         {posts.map((post) => 
        (
          <Marker key = {post._id} onClick = {()=>handleSelectedPost(post._id)} position = {{ lat: post.lat, lng: post.lng }} />
        )
      )}
          </Map >

      </APIProvider>
      </>
  )
}

