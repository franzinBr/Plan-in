const ListClassesFromModuleService = require('../services/listClassesFromModule.service');

class ListClassesFromModuleController {
    async handle(req, res) {
        const { id: _id } = req.params;

        const listClassesFromModule = new ListClassesFromModuleService();
        const classes = await listClassesFromModule.execute(_id);

        return res.status(200).json({
            success: true,
            classes,
        });
    }
}

module.exports = ListClassesFromModuleController;
