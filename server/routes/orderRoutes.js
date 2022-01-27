const express = require('express');
const controller = require('../controllers/ordersController')

// const router = express.router();   
const router = require('express').Router();


router.get('/orders', controller.index);

// adding an order
router.get('/order/add', controller.add);

router.post('/order/add', controller.save);


//editing an order
router.get('/order/edit/:id', controller.edit);

router.post('/order/edit/:id', controller.update);

//deleting an order
router.get('/order/delete/:id', controller.confirm);

router.post('/order/delete/:id', controller.delete);

module.exports =   router