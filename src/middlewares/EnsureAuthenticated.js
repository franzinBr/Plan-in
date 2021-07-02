const ErrorResponse = require('../utils/ErrorResponse');
const { verify } = require('jsonwebtoken');

class EnsureAuthenticated {
    static verify(req, res, next) {
        if (
            !req.headers.authorization ||
            !req.headers.authorization.startsWith('Bearer')
        ) {
            throw new ErrorResponse('Missing auth token', 401);
        }
        const authToken = req.headers.authorization.split(' ')[1].trim();

        try {
            const { sub } = verify(authToken, process.env.AUTH_TOKEN_SECRET);
            req.user_id = sub;

            return next();
        } catch (error) {
            return res.status(401).json({
                success: false,
                message: 'Invalid Token',
            });
        }
    }
}

module.exports = EnsureAuthenticated;
