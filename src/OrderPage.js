import React from 'react';
import DynamicFlexBox from './DynamicFlexBox';
import './DynamicFlexBox.css';
function OrderPage() {

    const dummyData = [
        {
          imageSrc: "https://via.placeholder.com/100",
          from: "New York, NY",
          to: "Los Angeles, CA",
          pickupDate: "2023-08-01",
          deliveryDate: "2023-08-05",
          loadType: "Refrigerated",
          weight: "20,000 lbs",
          vehicle: "Truck",
          bidAmount: "$2,500"
        },
        {
          imageSrc: "https://via.placeholder.com/100",
          from: "Chicago, IL",
          to: "Houston, TX",
          pickupDate: "2023-08-03",
          deliveryDate: "2023-08-06",
          loadType: "Dry Van",
          weight: "15,000 lbs",
          vehicle: "Truck",
          bidAmount: "$1,800"
        },
        {
          imageSrc: "https://via.placeholder.com/100",
          from: "Miami, FL",
          to: "Atlanta, GA",
          pickupDate: "2023-08-02",
          deliveryDate: "2023-08-04",
          loadType: "Flatbed",
          weight: "25,000 lbs",
          vehicle: "Truck",
          bidAmount: "$2,200"
        },
        {
          imageSrc: "https://via.placeholder.com/100",
          from: "Seattle, WA",
          to: "Denver, CO",
          pickupDate: "2023-08-04",
          deliveryDate: "2023-08-07",
          loadType: "Refrigerated",
          weight: "18,000 lbs",
          vehicle: "Truck",
          bidAmount: "$2,800"
        }
      ];
  return (
    
    <div className="app-container">
      {dummyData.map((item, index) => (
        <DynamicFlexBox
          key={index}
          imageSrc={item.imageSrc}
          from={item.from}
          to={item.to}
          pickupDate={item.pickupDate}
          deliveryDate={item.deliveryDate}
          loadType={item.loadType}
          weight={item.weight}
          vehicle={item.vehicle}
          bidAmount={item.bidAmount}
        />
      ))}
    </div>
  )
}

export default OrderPage