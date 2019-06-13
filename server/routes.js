const express = require('express');
const router = express.Router();
const mid = require('./middleware');
const User = require('./models/user');

// GET /logout
router.get('/logout', function (req, res, next) {
    if (req.session) {
        req.session.destroy(function (err) {
            if (err) {
                return next(err);
            } else {
                return res.sendStatus(200)
            }
        });
    }
});


//GET for /Login
router.get('/confirmLogin', mid.loggedOut, function (req, res, next) {
    return res.send(req.session.userId)
})

router.get('/getUserInfo', function (req, res) {
    User.findById(req.session.userId, (err, userInfo) => {
        if (err || !userInfo) {
            res.sendStatus(404);
        } else {
            res.send({ name: userInfo.name, description: userInfo.description, image: userInfo.image });
        }
    })
})

router.get('/allUsers', function (req, res) {
    User.find({}, 'name description image', (err, response) => {
        if (err) {
            res.sendStatus(400)
        } else {
            console.log('response', response);
            res.send(response)
        }
    })
})


router.post('/login', function (req, res, next) {
    if (req.body.email && req.body.password) {
        User.authenticate(req.body.email, req.body.password, function (error, user) {
            if (error || !user) {
                const err = new Error("Wrong Email or Password");
                err.status = 401;
                return next(err);
            } else {
                req.session.userId = user._id;
                return res.send({ name: user.name, email: user.email })
            }
        });
    } else {
        const err = new Error('The Password and Email must be filled out');
        err.status = 401;
        return next(err);
    }
});


router.post('/register', function (req, res, next) {
    if (req.body.email &&
        req.body.name &&
        req.body.password &&
        req.body.description &&
        req.body.image
    ) {


        if (!req.body.email) {
            const err = new Error('This email has already been used please use another');
            err.status = 400;
            return res.sendStatus(400)
        }

        const userData = {
            email: req.body.email,
            name: req.body.name,
            password: req.body.password,
            description: req.body.description,
            image: req.body.image
        }
        /*Using the Schema create method to insert the data into mongo 
        after the user has created their profile for the page*/
        User.create(userData, function (error, user) {
            if (error) {
                const err = new Error('All fields must be filled out');
                err.status = 400;
                return res.sendStatus(400)
            } else {
                req.session.userId = user._id;
                return res.send(req.session.userId)
            }
        })
    }
});

module.exports = router;