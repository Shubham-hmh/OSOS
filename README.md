# Restaurant API

The Restaurant API allows users to perform CRUD operations on restaurants. Users can create, read, update, and delete restaurant data. Additionally, the API provides endpoints to retrieve restaurants near a location within a specified radius and within a specified distance range.

## Installation

### Clone the repository:

```bash
git clone https://github.com/your-username/restaurant-api.git


### Install dependencies:
npm install

### Add environment variables
PORT=5000
MONGODB_URI=your-mongodb-uri
JWT_SECRET=your-secret-key

### Start the server
npm start

### Use Postman or any other HTTP client to make requests to the API endpoints.
Endpoints
POST /restaurants: Create a new restaurant.
GET /restaurants: Get all restaurants.
GET /restaurants/nearby: Get restaurants near a location within a specified radius.
GET /restaurants/range: Get restaurants within a specified distance range.
PUT /restaurants/:id: Update a restaurant by ID.
DELETE /restaurants/:id: Delete a restaurant by ID.

# This is below hosted link of backend, just make request using this link by adding above routes in it.
## Base Url : https://osos-j5ru.onrender.com
Example :https://osos-j5ru.onrender.com/api/restaurants/   request : get 
