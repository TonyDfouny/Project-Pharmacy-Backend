const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const cors = require('./cors');
const Orders = require('../models/orders');

const orderRouter = express.Router();

orderRouter.use(bodyParser.json());

orderRouter.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.cors,(req,res,next) => {
    Orders.find(req.query)
    .then((orders) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin','*');
        res.json(orders);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post(cors.corsWithOptions,(req, res, next) => {
    Orders.create(req.body)
    .then((order) => {
        console.log('Order Created ', order);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin','*');
        res.json(order);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put(cors.corsWithOptions,(req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /orders');
})
.delete(cors.corsWithOptions,(req, res, next) => {
    Orders.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin','*');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));    
});

orderRouter.route('/:orderId')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.cors,(req,res,next) => {
    Orders.findById(req.params.orderId)
    .then((order) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin','*');
        res.json(order);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post(cors.corsWithOptions,/*authenticate.verifyUser,*/(req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /orders/'+ req.params.orderId);
})
.put(cors.corsWithOptions,/*authenticate.verifyUser,*/(req, res, next) => {
    Orders.findByIdAndUpdate(req.params.orderId, {
        $set: req.body
    }, { new: true })
    .then((order) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin','*');
        res.json(order);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete(cors.corsWithOptions,/*authenticate.verifyUser,*/(req, res, next) => {
    
    Orders.findByIdAndRemove(req.params.orderId)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin','*');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

module.exports = orderRouter;