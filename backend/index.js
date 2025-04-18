const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const path = require("path");
require('./db/config');
const User = require('./db/User');
const Admin = require('./db/Admin');
const Service = require('./db/Service');
const Expert = require('./db/Expert');
const Query = require('./db/Query');
const jwt = require('jsonwebtoken');
const { json } = require('stream/consumers');
const jwtkey = 'rds';

const app = express();

app.use(express.json());
app.use(cors());

//User Register
app.post("/register", async (req, resp) => {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
        resp.send({ result: "User Already Registered" });
    } else {
       let user = new User(req.body);
        let result = await user.save();
        result = result.toObject();
        delete result.password;
        if (result) {
            resp.send(result);
        } else {
            resp.send({ result: 'Enter Details' });
        }
    }
});

// User Login
app.post('/login', async (req, resp) => {
    if (req.body.email && req.body.password) {
        let user = await User.findOne(req.body).select("-password");
        if (user) {
            jwt.sign({ user }, jwtkey, { expiresIn: "2h" }, (err, token) => {
                if (err) {
                    resp.send({ result: 'Something went wrong' });
                } else {
                    resp.send({ user, auth: token });
                }
            });
        } else {
            resp.send({ result: 'No user Found' });
        }
    } else {
        resp.send({ result: 'Please Enter valid email and password' });
    }
});

//Book Appointment without login or with login
app.post('/service', async (req, resp) => {
    if(req.body){
        let service = new Service(req.body);
        let result = await service.save();
        if(result){
        resp.send(result);
        }else{
            resp.send(result);
        }
    }else{
        resp.send({ result: 'Please enter details' });
    }
});

//Query from landing page
app.post('/query', async (req, resp) => {
    if(req.body){
        let query = new Query(req.body);
        let result = await query.save();
        if(result){
        resp.send(result);
        }else{
            resp.send(result);
        }
    }else{
        resp.send({ result: 'Please enter details' });
    }
});

//Jwt Verification
function verifyToken(req, resp, next) {
    let token = req.headers['authorization'];
    if (token) {
        token = token.split(' ')[1];
        jwt.verify(token, jwtkey, (err, valid) => {
            if (err) {
                resp.status(401).send({ result: 'please provide valid token' });
            } else {
                next();
            }
        })
    } else {
        resp.status(403).send({ result: 'please add token with header' });
    }
}

app.listen(5000);