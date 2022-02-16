const express = require('express'); 
const mongoose = require('mongoose'); 
const dotenv = require('dotenv'); 
const Product = require('./model/product'); 
const connectDB = require('./config/db'); 
const { all } = require('./routes/index');
const exphbs = require('express-handlebars');

// Load congfig
dotenv.config({path: './config/config.env'}); 

// DataBase Connected!! 
connectDB();

const app = express(); 

app.use(express.json()); 
app.use(express.urlencoded({extended: true})); 
app.use(express.static('public'));


app.set('view engine', '.ejs');   


// Routes 
app.use('/', require('./routes/index')); 
app.use('/auth', require('./routes/auth')); 

const PORT = process.env.PORT || 3000; 

app.listen(PORT, 
    console.log(`Server is running on PORT number ${PORT}`) 
); 


