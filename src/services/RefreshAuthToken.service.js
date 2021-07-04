const { verify } = require('jsonwebtoken');
const User = require('../models/User');
const GenAuthTokenService = require('./GenAuthToken.service');
const ErrorResponse = require('../utils/ErrorResponse');

class RefreshAuthTokenService {
    async execute(refreshToken) {
        try {
            if (!refreshToken) throw new ErrorResponse('Invalid token', 401);

            const { username, sub } = verify(
                refreshToken,
                process.env.REFRESH_TOKEN_SECRET
            );

            const user = await User.findOne({ username });
            if (!user) throw new ErrorResponse('Invalid token', 401);

            const genAuthTokenService = new GenAuthTokenService();
            const authToken = await genAuthTokenService.execute(username, sub);

            return {
                authToken,
                userInfo: {
                    id: user._id,
                    name: user.fullname,
                    username: user.username,
                    role: user.role,
                },
            };
        } catch (error) {
            throw new ErrorResponse('Invalid token', 401);
        }
    }
}

module.exports = RefreshAuthTokenService;
