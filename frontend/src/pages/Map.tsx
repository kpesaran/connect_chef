import React from "react"
import GoogleMapReact from 'google-map-react'

export default function Map() {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: .5
    }
    return <>
        <div style = {{height: '50vh', width: '50vh'}}>
            <h1>Map</h1> 
            <GoogleMapReact
                // bootstrapURLKeys={{ key:  }}
                defaultCenter={defaultProps.center}
                defaultZoom = {defaultProps.zoom}
            />
        </div>

    </>
} 