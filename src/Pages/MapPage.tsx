import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import './MapPage.css'

export interface MapPageProps {}

const MapPage = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCm664RuFoPJDxpkrRwJ24oBZBDc7pXmSo'
  })

  return (
    <div className="map">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={{
            lat: -9.666559,
            lng: -35.736472
          }}
          zoom={15}
        ></GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
};
export default MapPage
