import React, { useState } from 'react';
import { fetchCityId } from '../api/api';
import styles from './SearchForm.module.css';

const SearchForm = ({ onSearch}) => {
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [currency, setCurrency] = useState('USD');
  const [pagination, setPagination] = useState(0);

  const handleSearch = async (e) => {
    e.preventDefault();
    const cityId = await fetchCityId(destination);
    if (cityId) {
      onSearch({ cityId, checkIn, checkOut, adults, children, rooms, currency, pagination });
    }
  };

  return (
    //   <div className="mt-3 d-flex justify-content-center">
    //     <div className="container">
    //   <h1 className="text-center mb-4">Hotel Reservation System</h1>
    <form className={`form-inline ${styles.formContainer}`} onSubmit={handleSearch}>
      <div className="row">
        <div className=" col-md-6 col-sm-12 mb-3">
          <label className={styles.label} htmlFor="destination ">Destination (cairo for examble)</label>
          <input
            type="text"
            className={`form-control ${styles.inputField}`}
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value.toUpperCase())}
            placeholder="Enter destination"
            required
          />
        </div>
        <div className=" col-md-6 col-sm-12 mb-3">
          <label className={styles.label} htmlFor="adults">Number of Adults</label>
          <input
            type="number"
            className={`form-control ${styles.inputField}`}
            id="adults"
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
            min="1"
            required
          />
        </div>
        <div className=" col-md-6 col-sm-12 mb-3">
          <label className={styles.label} htmlFor="checkIn">Check-in Date</label>
          <input
            type="date"
            className={`form-control ${styles.inputField}`}
            id="checkIn"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            required
          />
        </div>
        <div className=" col-md-6 col-sm-12 mb-3">
          <label className={styles.label} htmlFor="checkOut">Check-out Date</label>
          <input
            type="date"
            className={`form-control ${styles.inputField}`}
            id="checkOut"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            required
          />
        </div>
     
        <div className=" col-md-6 col-sm-12 mb-3">
          <label className={styles.label} htmlFor="children">Number of Children</label>
          <input
            type="number"
            className={`form-control ${styles.inputField}`}
            id="children"
            value={children}
            onChange={(e) => setChildren(e.target.value)}
            min="0"
          />
        </div>
        <div className="col-md-6 col-sm-12 mb-3">
          <label className={styles.label} htmlFor="rooms">Number of Rooms</label>
          <input
            type="number"
            className={`form-control ${styles.inputField}`}
            id="rooms"
            value={rooms}
            onChange={(e) => setRooms(e.target.value)}
            min="1"
            required
          />
        </div>
        <div className="col-md-6 col-sm-12 mb-3">
          <label className={styles.label} htmlFor="currency">Currency</label>
          <select
            className={`form-control ${styles.inputField}`}
            id="currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="INR">INR</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
        <div className=" col-md-6 col-sm-12 mb-3">
          <label className={styles.label} htmlFor="pagination">Pagination</label>
          <input
            type="number"
            className={`form-control ${styles.inputField}`}
            id="pagination"
            value={pagination}
            onChange={(e) => setPagination(e.target.value)}
            min="0"
            required
          />
        </div>
      </div>
      <button type="submit" className={`btn btn-primary ${styles.button}`} >Search</button>
    </form>
    // </div>
    // </div>
  );
};

export default SearchForm; 