const RefreshAuthTokenService = require('../services/RefreshAuthToken.service');

class RefreshAuthTokenController {
    async handle(req, res) {
        const refreshToken = req.cookies.refreshtoken;
        console.log(req.cookies);

        const refreshAuthTokenService = new RefreshAuthTokenService();
        const { authToken, userInfo: user } =
            await refreshAuthTokenService.execute(refreshToken);

        return res.status(200).json({
            success: true,
            authToken,
            user,
        });
    }
}

module.exports = RefreshAuthTokenController;
