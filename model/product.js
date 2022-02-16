const mongoose = require('mongoose'); 

const ProductSchema = new mongoose.Schema({
    listOfImages: {
        type: String, 
    }, 

    /* options: {
        type: String, 
    }, */

    name: {
        type: String, 
        required: true
    }, 
    
    /*description: {
        type: String, 
        required: true
    }, */
    
    _id: {
        type: String, 
        required: true
    }, 
    
    /*Productid: {
        type: String,
        required: true
    }, 
    
    quantity: {
        type: String,
        required: true
    }, 
    
    rating: {
        type: String,
        required: true
    }, 
    */
    
    brandName: {
        type: String,
        required: true 
    }, 
})

module.exports = mongoose.model('Product', ProductSchema); 

