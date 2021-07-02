const { sign } = require('jsonwebtoken');

class GenRefreshTokenService {
    async execute(username, id) {
        const token = sign(
            {
                username,
            },
            process.env.REFRESH_TOKEN_SECRET,
            {
                subject: `${id}`,
                expiresIn: process.env.REFRESH_TOKEN_EXPIRE,
            }
        );

        return token;
    }
}

module.exports = GenRefreshTokenService;
