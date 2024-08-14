import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Login from './Login';
import Signup from './Signup';
import OrderPage from './OrderPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<OrderPage />} />
        {/* <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
