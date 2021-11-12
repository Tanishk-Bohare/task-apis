const bcrypt = require('bcrypt')
const mongoose = require('mongoose')

const UserSchema= new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        trim: true,
        required: [true, 'Email is required!']
    },
    password: {
        type: String,
        trim: true,
        required: [true, 'Password is required!']
    },
    senior:{
        type: String,
        trim: true,
        required: [true, 'Senior is required!']
    }
})

UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', UserSchema)