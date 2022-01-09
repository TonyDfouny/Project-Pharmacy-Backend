const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authenticate = require('../authenticate');
const cors = require('./cors');
const Prodorders = require('../models/prodorders');

const prodorderRouter = express.Router();

prodorderRouter.use(bodyParser.json());

prodorderRouter.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.cors,(req,res,next) => {
    Prodorders.find(req.query)
    .then((prodorders) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(prodorders);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post(cors.corsWithOptions,authenticate.verifyUser,(req, res, next) => {
    Prodorders.create(req.body)
    .then((product) => {
        console.log('Prodorder Created ', prodorder);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(prodorder);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put(cors.corsWithOptions,authenticate.verifyUser,(req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /prodorders');
})
.delete(cors.corsWithOptions,authenticate.verifyUser,(req, res, next) => {
    Prodorders.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));    
});

module.exports = prodorderRouter;