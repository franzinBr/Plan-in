const AuthenticateUserService = require('../services/AuthenticateUser.service');
const ConvertTimes = require('../utils/ConvertTimes');

class AuthenticateUserController {
    async handle(req, res) {
        const { userOrEmail, password } = req.body;

        const authenticateUserService = new AuthenticateUserService();
        const {
            authToken,
            refreshToken,
            userInfo: user,
        } = await authenticateUserService.execute(userOrEmail, password);

        res.cookie('refreshtoken', refreshToken, {
            httpOnly: true,
            path: '/refresh',
            maxAge: ConvertTimes.convert(process.env.REFRESH_TOKEN_EXPIRE),
        });
        res.cookie('aux', true, {
            path: '/',
            maxAge: ConvertTimes.convert(process.env.REFRESH_TOKEN_EXPIRE),
        });

        return res.status(200).json({
            success: true,
            authToken,
            user,
        });
    }
}

module.exports = AuthenticateUserController;
