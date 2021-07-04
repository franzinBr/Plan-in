const CreateUserService = require('../services/CreateUser.service');

class CreateUserController {
    async handle(req, res) {
        const { fullname, username, email, password } = req.body;

        const createUserService = new CreateUserService();
        const user = await createUserService.execute(
            fullname,
            username,
            email,
            password
        );

        return res.status(200).json({
            success: true,
            message: `${user.username} was successfully created`,
        });
    }
}

module.exports = CreateUserController;
