const mongoose = require('mongoose');

// Hotel DATABASE SCHEMA
const hotelSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    checkIn: {
        type: Date,
        required: true
    },
    checkOut: {
        type: Date,
        required: true
    },
    
    address: {
        type: String,

    },
    country: {
        type: String,
        required: true
    },
    flatNo: {
        type: Number,
        required: true
    },
    roomNumber: {
        type: Number
    },
    roomType: {
        type: String,
        required: true
    },
});

const Hotel = mongoose.model('Hotel',hotelSchema);
module.exports = Hotel;