const { Router } = require('express');
const AuthenticateUserController = require('../controllers/AuthenticateUser.controller');
const CreateUserController = require('../controllers/CreateUser.controller');
const LogoutUserController = require('../controllers/LogoutUser.controller');
const RefreshAuthTokenController = require('../controllers/RefreshAuthToken.controller');

const router = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const refreshAuthTokenController = new RefreshAuthTokenController();
const logoutUserController = new LogoutUserController();

router.post('/signup', createUserController.handle);
router.post('/login', authenticateUserController.handle);
router.post('/refresh', refreshAuthTokenController.handle);
router.post('/logout', logoutUserController.handle);

module.exports = router;
