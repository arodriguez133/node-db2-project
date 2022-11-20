const express = require("express")
const carsRoute = require("./cars/cars-router");

const server = express();

server.use('/', express.json());


server.use('/api/', carsRoute);

module.exports = server
