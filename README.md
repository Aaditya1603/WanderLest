# Wanderlust 🌍

Wanderlust is a full-stack, responsive vacation rental platform inspired by Airbnb. Built using the **MERN stack**, this application provides a seamless marketplace experience allowing users to list unique accommodations, explore destinations, and manage dynamic bookings.

🌐 **[Live Demo Link -  https://wanderlest.onrender.com ]** 

## 🚀 Key Features

*   **Dynamic Property Listings** – Full CRUD functionality for creating, viewing, updating, and deleting detailed rental listings with image uploads.
*   **Secure Authentication & Authorization** – Secure user management handling sign-ups, logins, and session persistence to protect account data.
*   **Smart Search & Filtering** – Multi-criteria search capabilities allowing users to find properties based on location, price, and category.
*   **Interactive Booking System** – A robust booking pipeline managing reservation states, availability calendars, and user itineraries.
*   **Interactive Location Map** – Integrated map view detailing precise property locations for enhanced user navigation.

## 🛠️ Tech Stack

*   **Frontend:** React.js, Tailwind CSS / Bootstrap, HTML5
*   **Backend:** Node.js, Express.js
*   **Database:** MongoDB
*   **State Management:** React Context API / Redux Toolkit
*   **APIs & Libraries:** [e.g. Cloudinary for image storage]

## 🛠️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com
   cd wanderlust
   ```

2. **Install dependencies:**
   ```bash
   # Install frontend dependencies
   cd client && npm install
   
   # Install backend dependencies
   cd ../server && npm install
   ```

3. **Environment Variables:**
   Create a `.env` file in your server directory and configure your essential credentials:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   # Add any cloud storage or map API keys here
   ```

4. **Run the application:**
   ```bash
   # Start the backend server
   cd server && npm start
   
   # Start the frontend client (in a separate terminal window)
   cd client && npm start
   ```

## 📂 Project Structure

```text
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI elements (Navbar, Card, etc.)
│   │   ├── pages/          # Page views (Home, ListingDetails, Booking, etc.)
│   │   └── context/        # Global state management
├── server/                 # Backend Node/Express API
│   ├── controllers/        # Request handling logic
│   ├── models/             # Database schemas (User, Listing, Booking)
│   ├── routes/             # API Endpoints
│   └── middleware/         # Auth verification guards
```
