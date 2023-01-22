// this is my backup map UI components
//
// this is a temp fix library for official google maps library


import React, { useState, useCallback } from 'react'
import { GoogleMap, useJsApiLoader, MarkerF, InfoWindow } from '@react-google-maps/api';
import { type H } from '../utils/houseType';

const containerStyle = {
  width: '50%',
  height: '800px'
};

const center = {
  lat: 38.397518,
  lng: -94.351616
};

function WrapperMap({ setSelectedHome, homes }: any) {
  
  const [map, setMap] = useState(null)
  const [markers, setMarkers] = useState([])
  const [activeInfoWindow, setActiveInfoWindow] = useState()
  
  const options = {
    disableDefaultUI: false,
    streetViewControl: false
  }

  const initialMarkers = homes.map((h: H)=> 
  {  
      if(h === undefined) return null
      return { 
        position: {
            lat: h.Latitude,
            lng: h.Longitude
        },
        label: { color: 'black', text: h.Address },
        draggable: false
     }
  
  })
  const fixMarkers = initialMarkers.filter((m: any) => m !== null)
//console.log('initialMARKER =>', fixMarkers)

  const markerClicked = (marker: any, index: any, ) => {
    setActiveInfoWindow(index)
    const clickHome = homes.filter((h: H)=> h.Address === marker.label.text)
    //console.log('clickhome=>',clickHome[0].permalink)
    setSelectedHome(clickHome[0])
    //console.log('clickhome is ==>',clickHome)
    //console.log('markerClicked, house =>', marker.label.text)
    //console.log('marker',marker,'index',index)
  }

  // create a map clicked event??
    
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLEAPI!
  })

  




  const onLoad = useCallback(function callback(map: any) {
 // const bounds = new window.google.maps.LatLngBounds(center);
 // map.fitBounds(bounds);
    map.setZoom(14)
    setMap(map)
    console.log('do work for markers now and here')
    setMarkers(fixMarkers)
  }, [])

  const onUnmount = useCallback(function callback(map: any) {
    setMap(null)
  }, [])

  




  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={options}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <>
            {markers!.map((marker: any, index: number) => (
                <MarkerF
                    key={index}
                    position={marker.position}
                    label={marker.label}
                    draggable={marker.draggable}
                    onClick={e => markerClicked(marker, index)}
                >
                  {(activeInfoWindow === index) &&
                    <InfoWindow position={marker.position}>
                      <b>Address: {marker.label.text}</b>
                    </InfoWindow>
                  }

                </MarkerF>
            ))
            }
        </>
      </GoogleMap>
  ) : <p>Loading Map....</p>
}

export default React.memo(WrapperMap)
