class EnvVerify {
    static checkEnv() {
        const toCheck = [
            'MONGO_URI',
            'AUTH_TOKEN_SECRET',
            'AUTH_TOKEN_EXPIRE',
            'REFRESH_TOKEN_SECRET',
            'REFRESH_TOKEN_EXPIRE',
        ];

        const notChecked = toCheck.filter((en) => process.env[en] === '');
        if (notChecked.length === 0) return true;
        throw new Error(
            `the following ​​environment variables have not been set: ${notChecked.join(
                ', '
            )}. Please check the .env file`
        );
    }
}

module.exports = EnvVerify;
