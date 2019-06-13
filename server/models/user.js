const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
/*This code will provide the structure to the database
schema structure  */
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});




/*Authenticate the user input with the information that 
is in the database already*/
UserSchema.statics.authenticate = function (email, password, callback) {
    User.findOne({ email: email })
        .exec(function (error, user) {
            if (error) {
                return callback(error)
            } else if (!user) {
                const err = new Error('User Not found');
                err.status = 401;
                return callback(err);
            }
            bcrypt.compare(password, user.password, function (error, result) {
                if (result === true) {
                    return callback(null, user);
                } else {
                    return callback();
                }
            })
        })
}


/*This is going to hash the password before inserting it
to the database */
UserSchema.pre('save', function (next) {
    let user = this
    bcrypt.hash(user.password, 10, function (err, hash) {
        if (err) {
            return next(err);
        }
        user.password = hash;
        next();
    });
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
