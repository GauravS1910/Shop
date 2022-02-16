const mongoose = require('mongoose');

// MongoDB Connected 
const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb://localhost:27017/product"); 
        console.log(`MongoDB connected: ${conn.connection.host}`);         
    } catch (err) {
        console.log(err); 
        process.exit(1); 
    }
} 

module.exports = connectDB; 

