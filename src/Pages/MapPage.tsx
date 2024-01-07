import React from 'react'
import { GoogleMap, useJsApiLoader, Marker} from '@react-google-maps/api'
import './MapPage.css'

export interface MapPageProps {}

const MapPage = () => {

  interface MarkerInfo {
    id: number;
    position: { lat: number; lng: number };
    title: string;
  }

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCm664RuFoPJDxpkrRwJ24oBZBDc7pXmSo'
  })

  const markers: MarkerInfo[] = [
    { id: 1, position: { lat: -9.666559, lng: -35.736472 }, title: 'Marker 1' },
  ];

  const mapStyles = {
    width: '100%',
    height: '100%'
  };

  const defaultCenter = {
    lat: -9.666559,
    lng: -35.736472
  };

  return (
    <div className="map">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={ mapStyles }
          center={defaultCenter}
          zoom={15}
        >
          {markers.map((marker) => (
            <Marker
              key={marker.id}
              position={marker.position}
              title={marker.title}
            />
          ))}
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
};
export default MapPage
