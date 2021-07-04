const { isValidObjectId } = require('mongoose');
const User = require('../models/User');
const ErrorResponse = require('../utils/ErrorResponse');

class EnsureAdmin {
    static async verify(req, res, next) {
        const { user_id } = req;

        if (!isValidObjectId(user_id))
            throw new ErrorResponse('Forbidden', 403);

        const { role } = await User.findById(user_id);
        if (role !== 'admin') throw new ErrorResponse('Forbidden', 403);

        return next();
    }
}

module.exports = EnsureAdmin;
