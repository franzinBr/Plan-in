const { sign } = require('jsonwebtoken');

class GenAuthTokenService {
    async execute(username, id) {
        const token = sign(
            {
                username,
            },
            process.env.AUTH_TOKEN_SECRET,
            {
                subject: `${id}`,
                expiresIn: process.env.AUTH_TOKEN_EXPIRE,
            }
        );

        return token;
    }
}

module.exports = GenAuthTokenService;
