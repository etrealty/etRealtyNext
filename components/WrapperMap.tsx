// this is my backup map UI components
//
// this is a temp fix library for official google maps library


import React from 'react'
import { GoogleMap, useJsApiLoader, MarkerF, InfoWindow, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '800px',
  height: '800px'
};

const center = {
  lat: 38.397518,
  lng: -94.351616
};

function WrapperMap({ setSelectedHome, homes }: any) {
  
  const initialMarkers = homes.map((h: any)=> 
  {  
      if(h?.location?.address?.coordinate?.lat === undefined) return null
      return { 
        position: {
            lat: h?.location?.address?.coordinate?.lat,
            lng: h?.location?.address?.coordinate?.lon
        },
        label: { color: 'black', text: h.location.address.line },
        draggable: false
     }
  
  })
  const fixMarkers = initialMarkers.filter((m: any) => m !== null)
    console.log('initialMARKER =>', fixMarkers)


  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLEAPI!
  })

  const [map, setMap] = React.useState(null)
  const [markers, setMarkers] = React.useState([])
  const onLoad = React.useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
    console.log('do work for markers now and here')
    setMarkers(fixMarkers)
  }, [])

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={11}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <>
            {markers!.map((marker: any, index: number) => (
                <MarkerF
                    key={index}
                    position={marker.position}
                    label={marker.label}
                    draggable={marker.draggable}
                >

                </MarkerF>
            ))
            }
        </>
      </GoogleMap>
  ) : <p>Loading Map....</p>
}

export default React.memo(WrapperMap)
