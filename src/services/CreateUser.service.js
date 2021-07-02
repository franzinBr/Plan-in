const { hash, genSalt } = require('bcryptjs');
const User = require('../models/User');
const ErrorResponse = require('../utils/ErrorResponse');

class CreateUserService {
    async execute(fullname, username, email, password) {
        const userAlreadyExists = await User.findOne({
            username,
            email,
        });

        if (userAlreadyExists)
            throw new ErrorResponse('The user already exists', 409);

        let errors = [];

        if (!fullname) errors.push('fullname');
        if (!username) errors.push('username');
        if (!email) errors.push('email');
        if (!password) errors.push('password');

        if (errors.length > 0) {
            const error = `${errors.join(', ')} field(s) is required`;
            throw new ErrorResponse(error, 400);
        }

        const salt = await genSalt(10);
        password = await hash(password, salt);

        const user = await User.create({
            fullname,
            username,
            email,
            password,
        });

        return user;
    }
}

module.exports = CreateUserService;
