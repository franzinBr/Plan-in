const CreateModuleService = require("../services/CreateModule.service");

class CreateModuleController {
    async handle(req, res) {
        const { name } = req.body;

        const createModuleService = new CreateModuleService();
        const module = await createModuleService.execute(name);

        return res.status(200).json({
            success: true,
            module
        })
    }
}

module.exports = CreateModuleController