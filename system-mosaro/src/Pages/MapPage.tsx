import React, { useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import axios from 'axios';
import './MapPage.css';

interface MapPageProps {}

interface MarkerInfo {
  id: number;
  position: { lat: number; lng: number };
}

const MapPage: React.FC<MapPageProps> = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCm664RuFoPJDxpkrRwJ24oBZBDc7pXmSo',
  });

  const [markers, setMarkers] = useState<MarkerInfo[]>([]);

  useEffect(() => {
    const fetchMarkers = async () => {
      try {
        const response = await axios.get('http://localhost:3002/api/markers');
        console.log('Dados do backend:', response.data);
        setMarkers(response.data.map((marker: { id: number; lat: number; lng: number }) => ({
          id: marker.id,
          position: { lat: marker.lat, lng: marker.lng },
        })));
      } catch (error) {
        console.error('Erro ao obter marcadores do servidor:', error);
      }
    };

    fetchMarkers();
  }, []);

  const mapStyles = {
    width: '100%',
    height: '100%',
  };

  const defaultCenter = {
    lat: -9.666559,
    lng: -35.736472,
  };

  return (
    <div className="map">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={mapStyles}
          center={defaultCenter}
          zoom={15}
        >
          {markers.map((marker) => (
            <Marker
              key={marker.id}
              position={marker.position}
            />
          ))}
        </GoogleMap>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default MapPage;
