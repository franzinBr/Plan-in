const dotenv = require('dotenv').config();
const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const Database = require('./src/configs/database');
const router = require('./src/routes/v1/routes');
const ErrorHandler = require('./src/middlewares/errorHandler');

Database.connect();
const app = express();

app.use(express.json());

app.use(morgan('common'));
app.use(
    helmet({
        contentSecurityPolicy: false,
    })
);
app.use(cors({ origin: process.env.FRONT_URL, credentials: true }));
app.use(cookieParser());
app.use(router);

app.use(ErrorHandler.handle);

if (process.env.NODE_ENV === 'production') {
    console.log('[NODE PRODUCTION]');
    app.use(express.static(path.join(__dirname, '/client/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 3080;

const server = app.listen(PORT, () => console.log(`Server running on ${PORT}`));
