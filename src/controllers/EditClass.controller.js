const EditClassService = require("../services/EditClass.service");

class EditClassController {
    async handle(req, res) {
        const { id: _id } = req.params;
        const { name, module_id, date } = req.body;

        const editClassService = new EditClassService();
        const classEdited = await editClassService.execute(_id, name, module_id, date);

        return res.status(200).json({
            success: true,
            classEdited
        });

    }
}

module.exports = EditClassController;