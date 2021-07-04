const CreateClassService = require('../services/CreateClass.service');

class CreateClassController {
    async handle(req, res) {
        const { name, module_id, date } = req.body;

        const createClassService = new CreateClassService();
        const classPlan = await createClassService.execute(
            name,
            module_id,
            date
        );

        return res.status(200).json({
            success: true,
            class: classPlan,
        });
    }
}

module.exports = CreateClassController;
