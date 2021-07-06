const dotenv = require('dotenv').config();
const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./src/Documentation/swagger.json');
const Database = require('./src/configs/database');
const router = require('./src/routes/v1/routes');
const ErrorHandler = require('./src/middlewares/ErrorHandler');
const EnvVerify = require('./src/utils/EnvVerify');

try {
    EnvVerify.checkEnv();
} catch (error) {
    console.log(error.message);
    return;
}

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
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
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
