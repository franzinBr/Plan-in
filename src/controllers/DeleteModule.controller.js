const DeleteModuleService = require("../services/DeleteModule.service");

class DeleteModuleController {
    async handle(req, res) {
        const { id: _id } = req.params;

        const deleteModuleService = new DeleteModuleService();
        const moduleDeletedName = await deleteModuleService.execute(_id);
        
        return res.status(200).json({
            success: true,
            message: `Module ${moduleDeletedName} has been deleted`
        })
    }
}

module.exports = DeleteModuleController