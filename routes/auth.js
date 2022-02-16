const express = require('express'); 
const debounce = require('debounce'); 
const authController = require('../controllers/auth.js'); 

const router = express.Router(); 

router.post('/display', (req, res) =>{
    debounce(authController.display(req, res), 300, false);
}); 

module.exports = router; 

