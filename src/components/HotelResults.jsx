import React from 'react';
import styles from './HotelResults.module.css';

const HotelResults = ({ hotels }) => {
  return (
    <div className="row">
      {hotels.length > 0 ? (
        hotels.map((hotel,index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4" >
            <div className={`card ${styles.hotelCard}`}>
              <div className="card-body">
                <h2 className={`card-title ${styles.hotelName}`}>{hotel.name}</h2>
                <p className={`card-text ${styles.hotelPrice}`}>Price: {hotel.price1 ? hotel.price1 : 'Not available'}</p>
                <p className={`card-text ${styles.hotelRating}`}>
                  Rating: {hotel.reviews?.rating} ({hotel.reviews?.count} reviews)
                </p>
                <p className="card-text">Telephone: {hotel.telephone}</p>
                <p className="card-text">Vendor: {hotel.vendor1}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center">No hotels yet.</p>
      )}
    </div>
  );
};

export default HotelResults; 