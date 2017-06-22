const User = require('../models/user');
const jwt = require('jwt-simple');
const config = require('../config');

function tokenForUser (user) {
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signin = function (req, res, next) {
    //User already has their email and password verified
    //we just need to give them a token
    res.send({token: tokenForUser(req.user)});
}

exports.signup = function (req, res, next) {
    const email = req.body.email;
    const password = req.body.password;


    if (!email || !password) {
        res.status(422).send({error: 'You must provide an email and password'});
    }

    //see if user with the given email exists
    User.findOne({ email: email }, function (err, existingUser) {
        if (err) {
            return next(err);
        }

        //if a user with email does exist, return an email
        if (existingUser) {
            return res.status(422).send({ error: 'Email is in use' });
        }

        //if fresh email, create and save user record
        const user = new User({
            email: email,
            password: password
        });

        user.save(function (err) {
            if (err) { return next(err) };

            //respond to request indicating the user was created
            res.json({token: tokenForUser(user)});
        });
    });
};