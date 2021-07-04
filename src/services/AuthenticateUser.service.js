const User = require('../models/User');
const { compare } = require('bcryptjs');
const ErrorResponse = require('../utils/ErrorResponse');
const GenAuthTokenService = require('./GenAuthToken.service');
const GenRefreshTokenService = require('./GenRefreshToken.service');

class AuthenticateUserService {
    async execute(userOrEmail, password) {
        if (!userOrEmail || !password)
            throw new ErrorResponse('Invalid Credentials', 400);

        let user = await User.findOne({}, '+password').or([
            { email: userOrEmail },
            { username: userOrEmail },
        ]);
        if (!user) throw new ErrorResponse('Invalid Credentials', 400);

        const passwordMatch = await compare(password, user.password);
        if (!passwordMatch) throw new ErrorResponse('Invalid Credentials', 400);

        const genAuthTokenService = new GenAuthTokenService();
        const genRefreshTokenService = new GenRefreshTokenService();

        const authToken = await genAuthTokenService.execute(
            user.username,
            user._id
        );
        const refreshToken = await genRefreshTokenService.execute(
            user.username,
            user._id
        );

        return {
            authToken,
            refreshToken,
            userInfo: {
                id: user._id,
                name: user.fullname,
                username: user.username,
                role: user.role,
            },
        };
    }
}

module.exports = AuthenticateUserService;
