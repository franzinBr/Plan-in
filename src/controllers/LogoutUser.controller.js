const LogoutUserService = require('../services/LogoutUser.service');

class LogoutUserController {
    async handle(req, res) {
        const logoutUserService = new LogoutUserService();
        logoutUserService.execute(res);

        return res.status(200).json({
            success: true,
            message: 'User logged out successfully',
        });
    }
}

module.exports = LogoutUserController;
