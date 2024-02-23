// routes/restaurants.js
const express = require('express');
const Restaurant = require('../model/Restaurant');

const router = express.Router();

// CRUD operations for restaurants

// Create a new restaurant
router.post('/', async (req, res) => {
  try {
    const restaurant = new Restaurant(req.body);
    await restaurant.save();
    res.status(201).json(restaurant);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Read all restaurants
router.get('/', async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.status(200).json(restaurants);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get restaurants near a location within a specified radius
router.get('/nearby', async (req, res) => {
  try {
    const { latitude, longitude, radius } = req.query;
    const restaurants = await Restaurant.find({
      location: {
        $nearSphere: {
          $geometry: {
            type: 'Point',
            coordinates: [parseFloat(longitude), parseFloat(latitude)]
          },
          $maxDistance: parseInt(radius)
        }
      }
    });
    res.status(200).json(restaurants);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get restaurants within a specified distance range
router.get('/range', async (req, res) => {
  try {
    const { latitude, longitude, minimumDistance, maximumDistance } = req.query;
    const restaurants = await Restaurant.find({
      location: {
        $nearSphere: {
          $geometry: {
            type: 'Point',
            coordinates: [parseFloat(longitude), parseFloat(latitude)]
          },
          $minDistance: parseInt(minimumDistance),
          $maxDistance: parseInt(maximumDistance)
        }
      }
    });
    res.status(200).json(restaurants);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});





// Update a restaurant
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedRestaurant = req.body; // Assuming the request body contains updated restaurant data
    const restaurant = await Restaurant.findByIdAndUpdate(id, updatedRestaurant, { new: true });
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }
    res.status(200).json(restaurant);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Delete a restaurant
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const restaurant = await Restaurant.findByIdAndDelete(id);
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }
    res.status(200).json({ message: 'Restaurant deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Create a geospatial index on the 'location' field of the 'Restaurant' collection
const mongoose = require('mongoose');
Restaurant.collection.createIndex({ location: '2dsphere' });

module.exports = router;
