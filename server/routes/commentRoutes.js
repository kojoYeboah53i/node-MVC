const express = require('express');
const controller = require('../controllers/commentController')

// const router = express.router();   
const router = require('express').Router();


// const comment = require('../model/comment');




// router.get('/about', controller.index);

router.post('/comment', controller.create);



module.exports =   router;