class LogoutUserService {
    execute(res) {
        res.clearCookie('refreshtoken', { path: '/v1/refresh' });
        res.clearCookie('aux', { path: '/' });
    }
}

module.exports = LogoutUserService;
