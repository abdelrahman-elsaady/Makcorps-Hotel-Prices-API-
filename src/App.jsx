import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import HotelResults from './components/HotelResults';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [hotels, setHotels] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async ({ cityId, checkIn, checkOut, adults, children, pagination, currency, tax }) => {
    setLoading(true);
    try {
      const params = {
        api_key: '67da9194afc76ff6a0063d4c',
        cityid: cityId,
        checkin: checkIn,
        checkout: checkOut,
        adults: adults,
        children: children,
        pagination: pagination,
        cur: currency,
        rooms: 1,
        tax: tax
      };

      const response = await axios.get('https://api.makcorps.com/city', { params });
      setHotels(response.data);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='container-fluid mt-2'>
      <h1 className='text-center'>Hotel Reservation System</h1>
      <SearchForm onSearch={handleSearch} />
      {loading && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
          <div className="loading-message">Fetching your hotel options, please wait...</div>
        </div>
      )}
      {errorMessage && <div className="alert alert-danger text-center">{errorMessage}</div>}
      <HotelResults hotels={hotels} />
    </div>
  );
}

export default App;












