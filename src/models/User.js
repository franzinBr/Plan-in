const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        fullname: {
            type: String,
        },
        username: {
            type: String,
            unique: true,
        },
        email: {
            type: String,
            unique: true,
        },
        password: {
            type: String,
            select: false,
        },
        role: {
            type: String,
            default: 'user',
        },
    },
    { timestamps: true }
);

const User = mongoose.model('User', UserSchema);

module.exports = User;
