// src/components/OrderDetails.js
import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import { useParams } from 'react-router-dom';
import './OrderDetails.css';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const OrderDetails = ({ orders }) => {
  const { id } = useParams();
  const [directions, setDirections] = useState(null);
  const [mapError, setMapError] = useState(null);

  const order = orders[id];

  useEffect(() => {
    if (order && window.google && window.google.maps) {
      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(
        {
          origin: order.from,
          destination: order.to,
          travelMode: 'DRIVING',
        },
        (result, status) => {
          if (status === 'OK') {
            setDirections(result);
            setMapError(null);
          } else {
            setMapError(`Error fetching directions: ${status}`);
            console.error(`Error fetching directions: ${status}`);
          }
        }
      );
    } else {
      setMapError('Google Maps API is not loaded.');
      console.error('Google Maps API is not loaded.');
    }
  }, [order]);

  if (!order) {
    return <p>Order not found.</p>;
  }

  return (
    <div className="order-details-container">
      <h2>Order Details</h2>
      <div className="order-details">
        <div className="order-info">
          <div className="order-image-container">
            <img src={order.imageSrc} alt="Order" className="order-image" />
          </div>
          <div className="order-details-content">
            <p><strong>From:</strong> {order.from}</p>
            <p><strong>To:</strong> {order.to}</p>
            <p><strong>Pickup Date:</strong> {order.pickupDate}</p>
            <p><strong>Delivery Date:</strong> {order.deliveryDate}</p>
            <p><strong>Load Type:</strong> {order.loadType}</p>
            <p><strong>Weight:</strong> {order.weight}</p>
            <p><strong>Vehicle:</strong> {order.vehicle}</p>
            <p><strong>Bid Amount:</strong> {order.bidAmount}</p>
          </div>
        </div>
        <div className="order-map">
          <LoadScript
            googleMapsApiKey="AIzaSyDkVza2FtLItgn_kzJ27_A4l2Eyf3ZrOOI"
            onLoad={() => console.log('Google Maps script loaded successfully')}
            onError={(error) => {
              console.error('Error loading Google Maps script:', error);
              setMapError('Error loading Google Maps script.');
            }}
          >
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={{ lat: 37.7749, lng: -122.4194 }} // Default center; adjust as needed
              zoom={10}
              onLoad={() => console.log('Google Map loaded successfully')}
              onError={(error) => {
                console.error('Error loading Google Map:', error);
                setMapError('Error loading Google Map.');
              }}
            >
              {order && directions && (
                <DirectionsRenderer
                  directions={directions}
                />
              )}
            </GoogleMap>
          </LoadScript>
          {mapError && <p className="map-error">{mapError}</p>}
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
