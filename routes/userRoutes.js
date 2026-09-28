const express = require('express');

const userController = require('../controllers/userController');

const route = express.Router();

// CREATE
route.post('/users', userController.createUser);

// GET ALL
route.get('/users', userController.getAllUsers);

// GET ONE
route.get('/users/:id', userController.getUserById);

// UPDATE
route.put('/users/:id', userController.updateUser);

// DELETE
route.delete('/users/:id', userController.deleteUser);

module.exports = route;