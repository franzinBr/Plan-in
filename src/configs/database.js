const mongoose = require('mongoose');
const Seed = require('./Seed');

class Database {
    async connect() {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: true,
        });
        console.log('MongoDB >>CONNECTED<<');

        if (!(await Seed.checkExistsAdmin())) {
            Seed.createAdmin();
        }
    }
}

module.exports = new Database();
