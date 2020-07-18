import React, { useState, useRef } from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps'

import SearchBox from './SearchBox'



const Map = withScriptjs(
  withGoogleMap(props => {
    const mapRef = useRef(null)
    const [zoom, setZoom] = useState(props.zoom)
    const [center, setCenter] = useState({lat:props.lat,lng:props.lng})

    const handlePlacesChanged = place => {
      setZoom(props.zoom)
      setCenter({
        lat: props.lat,
        lng: props.lng,
      })
    
      
    }

    

    return (
      <GoogleMap
      
        zoom={zoom}
        ref={mapRef}
        center={center}
        defaultOptions={props.defaultOptions}
        // onDragEnd={() => setCenter(mapRef.current.getCenter())}
        // onZoomChanged={() => setZoom(GoogleMap.current.getZoom())}
        onBoundsChanged={handlePlacesChanged}
      >
          
        {/* <SearchBox onPlacesChanged={handlePlacesChanged} /> */}
        <Marker position={{ lat:props.lat , lng: props.lng }} />
      </GoogleMap>
    )
  }),
)

export default Map
