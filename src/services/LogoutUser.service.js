class LogoutUserService {
    execute(res) {
        res.clearCookie('refreshtoken', { path: '/refresh' });
        res.clearCookie('aux', { path: '/' });
    }
}

module.exports = LogoutUserService;
