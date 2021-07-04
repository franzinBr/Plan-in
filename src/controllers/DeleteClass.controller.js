const DeleteClassService = require("../services/DeleteClass.service");

class DeleteClassController {
    async handle(req, res) {
        const { id: _id } = req.params;

        const deleteClassService = new DeleteClassService();
        const classDeletedName = await deleteClassService.execute(_id)

        return res.status(200).json({
            success: true,
            message: `Class ${classDeletedName} has been deleted`
        })
    }
}

module.exports = DeleteClassController;