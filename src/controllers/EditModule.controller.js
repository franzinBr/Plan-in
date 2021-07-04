const EditModuleService = require("../services/EditModule.service");

class EditModuleController {
    async handle(req, res) {
        const { id: _id } = req.params;
        const { name } = req.body;

        const editModuleService = new EditModuleService();
        const moduleEdited = await editModuleService.execute(_id, name);

        return res.status(200).json({
            success: true,
            moduleEdited
        });
    }
}

module.exports = EditModuleController;