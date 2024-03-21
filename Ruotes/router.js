const express = require('express')

const productsController = require('../Controller/productsController')

const userController = require('../Controller/usersController')

const router = new express.Router()

//get all products

router.get('/all-products',productsController.getAllProductsController)

//register
router.post('/register',userController.registerController)

//login
router.post('/login',userController.loginController)


module.exports = router