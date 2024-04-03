const mongoose = require('mongoose');

const mongoUri = "mongodb://localhost:27017";

const conn = () => {
    mongoose.connect(mongoUri)
        .then(() => {
            console.log('Connected successfully');
        })
        .catch((error) => {
            console.error('Error connecting to MongoDB:', error);
        });
};

module.exports = conn;
