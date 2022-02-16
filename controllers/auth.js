
const mongoose = require('mongoose'); 
const product = require('../model/product');

exports.display = async (req, res) => {
    console.log(req.body);  
    try {
        var regex = new RegExp(["^", req.body.search, "$"].join(""), "i");
        // For Desc: 'description': {$regex: req.body.search}
        const pro = await product.find({ $or: 
            [
                {'name': regex}, 
                {'brandName': regex } 
            ]
        })
        .limit(10) 
        .lean();    


        return res.render('\searchResult', {
            pro
        }); 

        console.log("Blehh"); 

    } catch (err) {
        console.log(err); 
    }

}

