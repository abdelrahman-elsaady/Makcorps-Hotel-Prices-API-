import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import HotelResults from './components/HotelResults';
import { fetchHotels } from './api/api';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (searchParams) => {
    setLoading(true);
    const hotelData = await fetchHotels(searchParams);
    setHotels(hotelData);
    setLoading(false);
  };

  return (
    <div  className="mt-2 d-flex justify-content-center">
      <div className="container">
        <h1 className="text-center mb-2">Hotel Reservation System</h1>
        <SearchForm onSearch={handleSearch} />
        
        {loading ? (
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
            <p>Loading hotels, please wait...</p>
          </div>
        ) : (
          <>
            <HotelResults hotels={hotels} />
          </>
        )}
      </div>
    </div>
  );
};

export default App; 