// markers.ts
import { MapMarker } from './types';
import MarkerModel from './database/models/Marker';

export const addMarker = async (marker: MapMarker) => {
  try {
    const addedMarker = await MarkerModel.create(marker);
    return addedMarker.toJSON();
  } catch (error) {
    console.error('Error adding marker:', error);
    throw error;
  }
};

export const getMarkers = async () => {
  try {
    const markers = await MarkerModel.findAll();
    return markers.map((marker) => marker.toJSON());
  } catch (error) {
    console.error('Error getting markers:', error);
    throw error;
  }
};