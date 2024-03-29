const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//const authenticate = require('../authenticate');
const cors = require('./cors');
const Categories = require('../models/categories');

const categoryRouter = express.Router();

categoryRouter.use(bodyParser.json());

categoryRouter.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.cors,(req,res,next) => {
    Categories.find(req.query)
    .then((categories) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin','*');
        res.json(categories);
    }, (err) => next(err))
    .catch((err) => next(err));
})

.post(cors.corsWithOptions,/*authenticate.verifyUser,*/(req, res, next) => {
    Categories.create(req.body)
    .then((categorie) => {
        console.log('categorie Created ', categorie);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin','*');
        res.json(categorie);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put(cors.corsWithOptions,/*authenticate.verifyUser,*/(req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /categories');
})
.delete(/*authenticate.verifyUser,*/(req, res, next) => {
    Categories.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin','*');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));    
});


categoryRouter.route('/:categoryId')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.cors,(req,res,next) => {
    Categories.findById(req.params.categoryId)
    .then((category) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin','*');
        res.json(category);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post(cors.corsWithOptions,/*authenticate.verifyUser,*/(req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /categories/'+ req.params.categoryId);
})
.put(cors.corsWithOptions,/*authenticate.verifyUser,*/(req, res, next) => {
    Categories.findByIdAndUpdate(req.params.categoryId, {
        $set: req.body
    }, { new: true })
    .then((category) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin','*');
        res.json(category);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete(cors.corsWithOptions,/*authenticate.verifyUser,*/(req, res, next) => {
    //console.log("testttttt")
    Categories.findByIdAndRemove(req.params.categoryId)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        //res.setHeader('Access-Control-Allow-Origin','*');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});


module.exports = categoryRouter;