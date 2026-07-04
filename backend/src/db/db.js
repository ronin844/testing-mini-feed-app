const mongoose = require('mongoose');


async function connectDB() {
    const mongoUri = process.env.MONGODB;

    if (!mongoUri) {
        throw new Error('Missing MONGODB in .env file');
    }

    await mongoose.connect(mongoUri);
    console.log("Database connected successfully");
} 

module.exports = connectDB;