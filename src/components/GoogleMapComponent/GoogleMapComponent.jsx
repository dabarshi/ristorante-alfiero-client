import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 40.748817, // Latitude for the map center (e.g., New York City)
  lng: -73.985428 // Longitude for the map center (e.g., New York City)
};

const GoogleMapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY_HERE">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10} // Zoom level
      >
        {/* Add markers or other map elements here */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default GoogleMapComponent;
