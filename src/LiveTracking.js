// src/components/LiveTracking.js
import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '600px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const LiveTracking = () => {
  const [truckLocation, setTruckLocation] = useState(center);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fetch the updated location from your API
      // For demonstration, we'll use a dummy location update
      const newLocation = {
        lat: truckLocation.lat + 0.001,
        lng: truckLocation.lng + 0.001
      };
      setTruckLocation(newLocation);
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, [truckLocation]);

  return (
    <LoadScript googleMapsApiKey="AIzaSyDkVza2FtLItgn_kzJ27_A4l2Eyf3ZrOOI">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={truckLocation}
        zoom={10}
      >
        <Marker position={truckLocation} />
      </GoogleMap>
    </LoadScript>
  );
}

export default LiveTracking;
