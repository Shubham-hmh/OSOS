
Restaurant API
The Restaurant API allows users to perform CRUD operations on restaurants. Users can create, read, update, and delete restaurant data. Additionally, the API provides endpoints to retrieve restaurants near a location within a specified radius and within a specified distance range.

Installation
Clone the repository:
bash
Copy code
git clone https://github.com/your-username/restaurant-api.git
Install dependencies:
bash
Copy code
cd restaurant-api
npm install
Set up environment variables:
Create a .env file in the root directory
Add the following environment variables:
makefile
Copy code
PORT=3000
MONGODB_URI=your-mongodb-uri
SECRET_KEY=your-secret-key
Usage
Start the server:
sql
Copy code
npm start
Use Postman or any other HTTP client to make requests to the API endpoints.
Endpoints
POST /restaurants: Create a new restaurant.
GET /restaurants: Get all restaurants.
GET /restaurants/nearby: Get restaurants near a location within a specified radius.
GET /restaurants/range: Get restaurants within a specified distance range.
PUT /restaurants/:id: Update a restaurant by ID.
DELETE /restaurants/:id: Delete a restaurant by ID.
