import React, { useState } from 'react';
import axios from 'axios';
import styles from './SearchForm.module.css';

const SearchForm = ({ onSearch }) => {
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [pagination, setPagination] = useState(0);
  const [currency, setCurrency] = useState('USD');
  const [tax, setTax] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    const cityId = await fetchCityId(destination);
    if (cityId) {
      onSearch({ cityId, checkIn, checkOut, adults, children, pagination, currency, tax });
    }
  };

  const fetchCityId = async (destination) => {
    try {
      const response = await axios.get(`https://api.makcorps.com/mapping?api_key=67da9194afc76ff6a0063d4c&name=${destination}`);
      return response.data[0]?.document_id;
            
    } catch (error) {
      console.error("Error fetching city ID:", error.response.data.message);
      return error.response.data.message;
    }
  };

  return (
    <form onSubmit={handleSearch} className={styles.formContainer}>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
          <label className={styles.label}>Destination <small>
          (cairo for examble)</small></label>
          <input type="text" className={styles.inputField} value={destination} onChange={(e) => setDestination(e.target.value.toUpperCase())} placeholder="Destination" required />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
          <label className={styles.label}>Check-In</label>
          <input type="date" className={styles.inputField} value={checkIn} onChange={(e) => setCheckIn(e.target.value)} required />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
          <label className={styles.label}>Check-Out</label>
          <input type="date" className={styles.inputField} value={checkOut} onChange={(e) => setCheckOut(e.target.value)} required />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
          <label className={styles.label}>Adults</label>
          <input type="number" className={styles.inputField} value={adults} onChange={(e) => setAdults(e.target.value)} min="1" />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
          <label className={styles.label}>Children</label>
          <input type="number" className={styles.inputField} value={children} onChange={(e) => setChildren(e.target.value)} min="0" max="10" />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
          <label className={styles.label}>Pagination</label>
          <input type="number" className={styles.inputField} value={pagination} onChange={(e) => setPagination(e.target.value)} min="0" placeholder="Pagination (0 for first page)" required />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
          <label className={styles.label}>Currency</label>
          <select className={styles.inputField} value={currency} onChange={(e) => setCurrency(e.target.value)} required>
            <option value="USD">USD - US Dollar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="GBP">GBP - British Pound</option>
            <option value="INR">INR - Indian Rupee</option>
            <option value="AUD">AUD - Australian Dollar</option>
            <option value="CAD">CAD - Canadian Dollar</option>
            <option value="JPY">JPY - Japanese Yen</option>
            <option value="CNY">CNY - Chinese Yuan</option>
            <option value="NZD">NZD - New Zealand Dollar</option>
            <option value="SGD">SGD - Singapore Dollar</option>
            <option value="EGP">EGP - Egyptian Pound</option>
          </select>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
          <label className={styles.label}>Include Tax</label>
          <div>
            <input type="checkbox" checked={tax} onChange={(e) => setTax(e.target.checked)} />
          </div>
        </div>
        <div className=" mb-3">
          <button type="submit" className={styles.button}>Search</button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;