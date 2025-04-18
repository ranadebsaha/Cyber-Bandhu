const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const path = require("path");
require('./db/config');
const User = require('./db/User');
// const Admin = require('./db/Admin');
// const jwt = require('jsonwebtoken');
// const { json } = require('stream/consumers');
// const jwtkey = 'rds';

const app = express();

app.use(express.json());
app.use(cors());
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//User Register
app.post("/register", async (req, resp) => {
    // let user = await User.findOne({ email: req.body.email });
    // if (user) {
    //     resp.send({ result: "User Already Registered" });
    // } else {
       let user = new User(req.body);
        let result = await user.save();
        result = result.toObject();
        delete result.password;
        if (result) {
            resp.send(result);
        } else {
            resp.send({ result: 'Enter Details' });
        }
    // }
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
        resp.send({ result: 'No user Found' });
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