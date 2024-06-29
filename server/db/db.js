
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const MONGODB_URL = process
    .env.MONGODB_URL;

const db = () => {
    try {
        const conn = mongoose
            .connect(MONGODB_URL);
        console.log(`MongoDB connected to : 
        ${conn.connection.host}`);
    } catch (err) {
        console.error("Error connecting " +
            "to MongoDB cluster:", err);
    }
}

module.exports = db;