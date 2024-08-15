// src/components/OrderList.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './OrderList.css';

const OrderList = ({ orders }) => {
  return (
    <div className="order-list-container">
      <h2>Order List</h2>
      <div className="order-list">
        {orders.map((order, index) => (
          <div key={index} className="order-card">
            <div className="order-info">
              <div className="order-image-container">
                <img src={order.imageSrc} alt="Order" className="order-image" />
              </div>
              <div className="order-details">
                <p><strong>From:</strong> {order.from}</p>
                <p><strong>To:</strong> {order.to}</p>
                <p><strong>Pickup Date:</strong> {order.pickupDate}</p>
                <p><strong>Delivery Date:</strong> {order.deliveryDate}</p>
                <button 
                  className="view-more-button"
                  onClick={() => {}}
                >
                  <Link to={`/order/${index}`}>View More</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderList;
