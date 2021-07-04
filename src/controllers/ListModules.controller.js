const ListModulesService = require('../services/ListModules.service');

class ListModulesController {
    async handle(req, res) {
        const listModulesService = new ListModulesService();
        const modules = await listModulesService.execute();

        return res.status(200).json({
            success: true,
            modules,
        });
    }
}

module.exports = ListModulesController;
