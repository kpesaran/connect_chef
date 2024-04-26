import React, { useEffect } from "react"
import axios from "axios";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";


const containerStyle = {
    width: '400px',
    height: '400px'
}

const center = {
    lat: 10.99835602,
    lng: 77.01502627}



function Marker({text}) {
    return <div>{text}</div>
}

function Map() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: ""
    })
    
    return isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
    ) : <></>
  }
  
  export default React.memo(Map)
  

