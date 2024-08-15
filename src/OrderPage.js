import React, { useState } from 'react';
import DynamicFlexBox from './DynamicFlexBox';
import './DynamicFlexBox.css';

function OrderPage() {
  const [filters, setFilters] = useState({
    loadType: 'All',
    from: '',
    to: '',
    vehicle: 'All'
  });
  const [sort, setSort] = useState('None');

  const dummyData = [
    {
      imageSrc: "https://via.placeholder.com/100",
      from: "Madanapalle",
      to: "Pune",
      pickupDate: "2023-08-01",
      deliveryDate: "2023-08-05",
      loadType: "Refrigerated",
      weight: "20,000 lbs",
      vehicle: "Truck",
      bidAmount: "$2,500"
    },
    {
      imageSrc: "https://via.placeholder.com/100",
      from: "Hyderabad",
      to: "Chennai",
      pickupDate: "2023-08-03",
      deliveryDate: "2023-08-06",
      loadType: "Dry Van",
      weight: "15,000 lbs",
      vehicle: "Truck",
      bidAmount: "$1,800"
    },
    {
      imageSrc: "https://via.placeholder.com/100",
      from: "Kakianada",
      to: "Kadapa",
      pickupDate: "2023-08-02",
      deliveryDate: "2023-08-04",
      loadType: "Flatbed",
      weight: "25,000 lbs",
      vehicle: "Truck",
      bidAmount: "$2,200"
    },
    {
      imageSrc: "https://via.placeholder.com/100",
      from: "vijayawada",
      to: "Guntur",
      pickupDate: "2023-08-04",
      deliveryDate: "2023-08-07",
      loadType: "Refrigerated",
      weight: "18,000 lbs",
      vehicle: "Truck",
      bidAmount: "$2,800"
    }
  ];

  const handleFilterChange = (key, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [key]: value
    }));
  };

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  const filteredData = dummyData.filter(item => 
    (filters.loadType === 'All' || item.loadType === filters.loadType) &&
    (filters.from === '' || item.from.toLowerCase().includes(filters.from.toLowerCase())) &&
    (filters.to === '' || item.to.toLowerCase().includes(filters.to.toLowerCase())) &&
    (filters.vehicle === 'All' || item.vehicle === filters.vehicle)
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (sort === 'Ascending') {
      return parseFloat(a.bidAmount.replace(/[^0-9.-]+/g,"")) - parseFloat(b.bidAmount.replace(/[^0-9.-]+/g,""));
    } else if (sort === 'Descending') {
      return parseFloat(b.bidAmount.replace(/[^0-9.-]+/g,"")) - parseFloat(a.bidAmount.replace(/[^0-9.-]+/g,""));
    }
    return 0;
  });

  return (
    <div className="app-container">
      <div className="filter-sort-container">
        <div className="filter-container">
          <label htmlFor="loadType">Filter by Load Type:</label>
          <select id="loadType" value={filters.loadType} onChange={(e) => handleFilterChange('loadType', e.target.value)}>
            <option value="All">All</option>
            <option value="Refrigerated">Refrigerated</option>
            <option value="Dry Van">Dry Van</option>
            <option value="Flatbed">Flatbed</option>
          </select>
          <label htmlFor="from">Filter by From:</label>
          <input
            id="from"
            type="text"
            value={filters.from}
            onChange={(e) => handleFilterChange('from', e.target.value)}
            placeholder="Enter location"
          />
          <label htmlFor="to">Filter by To:</label>
          <input
            id="to"
            type="text"
            value={filters.to}
            onChange={(e) => handleFilterChange('to', e.target.value)}
            placeholder="Enter location"
          />
          <label htmlFor="vehicle">Filter by Vehicle:</label>
          <select id="vehicle" value={filters.vehicle} onChange={(e) => handleFilterChange('vehicle', e.target.value)}>
            <option value="All">All</option>
            <option value="Truck">Truck</option>
          </select>
        </div>
        <div className="sort-container">
          <label htmlFor="sort">Sort by Bid Amount:</label>
          <select id="sort" value={sort} onChange={handleSortChange}>
            <option value="None">None</option>
            <option value="Ascending">Ascending</option>
            <option value="Descending">Descending</option>
          </select>
        </div>
      </div>
      <div className="flexbox-container">
        {sortedData.map((item, index) => (
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
    </div>
  );
}

export default OrderPage;
