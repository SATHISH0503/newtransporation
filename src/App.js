import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React, { useState } from 'react';

import "./App.css";
import Header from "./Header";
import Login from "./Login";
import Signup from "./Signup";
import OrderPage from "./OrderPage";
import HomePage from "./HomePage";
import Footer from "./Footer";
import DriverForm from "./DriverForm";
import VehicleForm from "./VehicleForm";
import VehicleList from "./VechicleList";
import DriverList from "./DriverList";
import OrderList from "./OrderList";
import OrderDetails from "./OrderDetails";
import LiveTracking from "./LiveTracking";
const vehicles = [
  { make: 'Toyota', model: 'Camry', year: 2020, licensePlate: 'ABC123', vin: '1HGBH41JXMN109186' },
  { make: 'Honda', model: 'Accord', year: 2019, licensePlate: 'XYZ789', vin: '1HGCM82633A123456' },
  { make: 'Ford', model: 'Focus', year: 2018, licensePlate: 'LMN456', vin: '1FADP3F23EL123456' },
];

const dummyDataOrder = [
  {
    imageSrc: "https://via.placeholder.com/100",
    from: "Madanapalle",
    to: "Pune",
    pickupDate: "2023-08-01",
    deliveryDate: "2023-08-05",
    loadType: "Refrigerated",
    weight: "20,000 lbs",
    vehicle: "Truck",
    bidAmount: "$2,500",
    driverName: "John Doe"
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
    bidAmount: "$1,800",
    driverName: "Jane Smith"
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
    bidAmount: "$2,200",
    driverName: "Jim Beam"
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
    bidAmount: "$2,800",
    driverName: "Alice Johnson"
  }
];

function App() {
  const [drivers, setDrivers] = useState([
    { firstName: 'John', lastName: 'Doe', licenseNumber: 'A1234567', contact: '555-1234' },
    { firstName: 'Jane', lastName: 'Smith', licenseNumber: 'B2345678', contact: '555-5678' },
    { firstName: 'Jim', lastName: 'Beam', licenseNumber: 'C3456789', contact: '555-8765' },
  ]);
  const addDriver = (newDriver) => {
    setDrivers([...drivers, newDriver]);
  };
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <HomePage userType="customer" />
              {/* <Footer /> */}
            </>
          }
        />
        <Route
          path="/search-load"
          element={
            <>
              <Header/>
              <OrderPage />
            </>
          }
        />
        <Route
          path="/add-driver"
          element={
            <>
              <Header />
              <DriverList drivers={drivers} addDriver={addDriver} />
            </>
          }
        />
        <Route path="/add-vehicle" element={
          <>
          <Header/>
          <VehicleList vehicles={vehicles} />
          </>
          } />
        <Route path="/order-load" element={
          <>
          <Header/>
          <OrderList orders={dummyDataOrder} />
          </>
          } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/order/:id" element={<OrderDetails orders={dummyDataOrder} />} />
      </Routes>
    </Router>
  );
}

export default App;
