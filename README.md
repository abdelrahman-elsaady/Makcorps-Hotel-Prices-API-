# Hotel Reservation System

A hotel reservation system built with React that allows users to search for hotels based on their destination, check-in and check-out dates, number of guests, and more. The application fetches hotel data from the Makcorps Hotel Prices API.

## Live Demo

You can view the live demo of the application [here](https://makcorps-hotel-prices-api.vercel.app/).

## Features

- Search for hotels by destination.
- Select check-in and check-out dates.
- Specify the number of adults and children.
- Choose the currency for pricing.
- Pagination support for hotel results.
- Responsive design for mobile and desktop views.

## Technologies Used

- React
- Vite
- Axios
- Bootstrap
- CSS Modules

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/Makcorps-Hotel-Prices-API.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Makcorps-Hotel-Prices-API
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root of the project and add your API key and base URL:

   ```plaintext
   VITE_API_KEY=your_api_key_here
   VITE_BASE_URL=https://api.makcorps.com
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open your browser and go to `http://localhost:3000` to view the application.

## Usage

1. Enter the destination in the search form.
2. Select the check-in and check-out dates.
3. Specify the number of adults and children.
4. Choose the currency.
5. Click the "Search" button to view available hotels.

## Error Handling

The application includes error handling to display user-friendly messages when an error occurs during the hotel search process.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.