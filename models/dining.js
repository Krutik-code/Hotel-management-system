const mongoose = require('mongoose');

// Dining DATABASE SCHEMA
const diningSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    numberOfCustomers: {
        type: Number,
        required: true
    },
});

const Dining = mongoose.model('Dining',diningSchema);
module.exports = Dining;