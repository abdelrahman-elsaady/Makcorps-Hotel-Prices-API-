import axios from 'axios';



// const API_KEY = process.env.REACT_APP_API_KEY;
// const BASE_URL = process.env.REACT_APP_BASE_URL;

export const fetchCityId = async (destination) => {
  try {
    const response = await axios.get(`${BASE_URL}/mapping`, {
      params: {
        api_key: process.env.REACT_APP_API_KEY,
        name: destination,
      },
    });
    return response.data?.[0]?.document_id; // Assuming the first result is the desired city ID
  } catch (error) {
    console.error("Error fetching city ID:", error);
    throw new Error('Failed to fetch city ID. Please check your input.');
  }
};

export const fetchHotels = async ({ cityId, checkIn, checkOut, adults, children, rooms, currency, pagination }) => {
  console.log('Fetching hotels with params:', {
    cityId,
    checkIn,
    checkOut,
    adults,
    children,
    rooms,
    currency,
    pagination,
  });

  try {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/city`, {
      params: {
        api_key: API_KEY,
        cityid: cityId,
        checkin: checkIn,
        checkout: checkOut,
        adults,
        children,
        rooms,
        cur: currency,
        pagination,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching hotels:", error.response ? error.response.data : error.message);
    throw new Error('Failed to fetch hotels. Please try again later.');
  }
}; 