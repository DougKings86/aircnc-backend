const express = require("express");
const multer = require('multer');
const UploadConfig = require('./config/upload');

const SessionController = require("./controllers/SessionController");
const SpotController = require("./controllers/SpotController");
const DashbordController = require("./controllers/DashboardController");
const BookingController = require("./controllers/BookingController");

const routes = express.Router();
const upload = multer(UploadConfig);


routes.post('/session' , SessionController.store );
routes.get('/spots' ,SpotController.index );
routes.post('/spots' , upload.single('thumbnail'),  SpotController.store );
routes.get('/dashboard' ,   DashbordController.show );
routes.post('/spots/:spot_id/bookings' , BookingController.store);

module.exports = routes;
