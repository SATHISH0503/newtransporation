import React from 'react';
import './DynamicFlexBox.css';

const DynamicFlexBox = ({ imageSrc, from, to, pickupDate, deliveryDate, loadType, weight, vehicle, bidAmount }) => {
  return (
    <div className="flex-container">
      <div className="image-container">
        <img src={imageSrc} alt="Load" className="flex-image" />
      </div>
      <div className="flex-content">
        {/* <h2 className="flex-header">Load Details</h2> */}
        <div className="flex-details">
          <div className="detail-item"><strong>From:</strong> {from}</div>
          <div className="detail-item"><strong>To:</strong> {to}</div>
          <div className="detail-item"><strong>Pickup Date:</strong> {pickupDate}</div>
          <div className="detail-item"><strong>Delivery Date:</strong> {deliveryDate}</div>
          <div className="detail-item"><strong>Load Type:</strong> {loadType}</div>
          <div className="detail-item"><strong>Weight:</strong> {weight}</div>
          <div className="detail-item"><strong>Vehicle:</strong> {vehicle}</div>
        </div>
        <button className="bid-button">{bidAmount}</button>
      </div>
    </div>
  );
};


export default DynamicFlexBox;
