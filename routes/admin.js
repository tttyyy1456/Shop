const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminCtrl');

// admin/add-product
router.get('/add-product', adminController.getAddProduct);

router.get('/products', adminController.getProducts)


router.post('/add-product', adminController.postAddProduct)

module.exports = {
    routes: router,
}

