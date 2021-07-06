const User = require('../models/User');
const { hash, genSalt } = require('bcryptjs');

class Seed {
    constructor() {
        this.defaultAdminName = 'admin';
        this.defaultAdminUsername = 'admin';
        this.defaultAdminEmail = 'admin@admin.com';
        this.password = 'admin';
    }

    async checkExistsAdmin() {
        const adminExists = await User.findOne({
            username: this.defaultAdminUsername,
        });
        if (!adminExists) return false;
        return true;
    }

    async createAdmin() {
        const salt = await genSalt(10);
        const password = await hash(this.password, salt);

        const admin = await User.create({
            fullname: this.defaultAdminName,
            username: this.defaultAdminUsername,
            email: this.defaultAdminEmail,
            password,
            role: 'admin',
        });
        if (!admin) {
            console.log('Failed to create a new admin user');
            return false;
        }
        console.log('Success creating new admin user');
        return true;
    }
}

module.exports = new Seed();
