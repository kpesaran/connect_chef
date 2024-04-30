import React, { useEffect,useState ,useCallback } from "react"
import axios from "axios";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";


const containerStyle = {
    width: '50vh',
    height: '50vw'
}

const center = {
    lat: 10.99835602,
    lng: 77.01502627}


function Map() {
    const [posts, setPosts] = useState([])
    const [visiblePosts,setVisiblePosts] = useState([])
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'k'
    })
    const [map, setMap] = useState(null)

    const onLoad = useCallback(function callback(map) {
      // This is just an example of getting and using the map instance!!! don't just blindly copy!
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
  
      setMap(map)
    }, [])
    // clean up callback
    const onUnmount = useCallback(function callback(map) {
      setMap(null)
    }, [])


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
  
    
    console.log(posts)

    
    return isLoaded ? (
       <div className="flex">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={2}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
            { /* Child components, such as markers, info windows, etc. */}
            {posts.map(post => (
                <Marker 
                    key={post.id}
                    position = {{lat:post.lat,lng:post.lng }}/>
            ))}
          <></>
            </GoogleMap>
            
            <div className="text-center">
                <h1 className="text-center">Posts</h1>
                {posts.map(post => (
                    <div>{post.title}</div>
                ))}
            </div>
        </div>
            )
            
            : <><h3>Map failed to load</h3></>
        
  }
  
  export default React.memo(Map)
  

