const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const cors = require('./cors');
const Users = require('../models/users');

const userRouter = express.Router();

userRouter.use(bodyParser.json());

userRouter.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.cors,(req,res,next) => {
    Users.find(req.query)
    
    .then((users) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin','*');
        res.json(users);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post(cors.corsWithOptions,/*authenticate.verifyUser,*/(req, res, next) => {
    Users.create(req.body)
    .then((user) => {
        console.log('User Created ', user);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin','*');
        res.json(user);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put(cors.corsWithOptions,/*authenticate.verifyUser,*/(req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /users');
})
.delete(cors.corsWithOptions,/*authenticate.verifyUser,*/(req, res, next) => {
    Users.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin','*');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));    
});

userRouter.route('/:userId')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.cors,(req,res,next) => {
    Users.findById(req.params.userId)
    .then((user) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin','*');
        res.json(user);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post(cors.corsWithOptions,/*authenticate.verifyUser,*/(req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /users/'+ req.params.userId);
})
.put(cors.corsWithOptions,/*authenticate.verifyUser,*/(req, res, next) => {
    Users.findByIdAndUpdate(req.params.userId, {
        $set: req.body
    }, { new: true })
    .then((user) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin','*');
        res.json(user);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete(cors.corsWithOptions,/*authenticate.verifyUser,*/(req, res, next) => {
    
    Users.findByIdAndRemove(req.params.userId)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin','*');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
}); 




module.exports = userRouter;