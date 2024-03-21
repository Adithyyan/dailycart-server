const products = require('../Model/productModel')

//get all products from database

exports.getAllProductsController =async(req,res)=>{
 try {
    const allproducts = await products.find()
     res.status(200).json(allproducts)
    } catch(error) {
        res.status(401).json(error)
    }
}