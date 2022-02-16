const express = require('express');
const mongoose = require('mongoose'); 
const product = require('../model/product'); 

const router = express.Router(); 

// @desc    Login/Landing page 
// @route   GET /
router.get('/', async(req, res) => {


    try {
        const image = await product.find({}, {listOfImages:1, _id:0}).lean();  
        const proName = await product.distinct('name').lean(); 

        

        res.render('dashboard', {
            image, proName
        }); 

    } catch (err) { 
        console.log(err); 
    }

}); 

module.exports = router; 

