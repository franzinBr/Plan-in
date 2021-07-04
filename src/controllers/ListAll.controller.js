const ListAllService = require('../services/ListAll.service');

class ListAllController {
    async handle(_, res) {
        const listAllService = new ListAllService();
        const modules = await listAllService.execute();

        return res.status(200).json({
            success: true,
            modules,
        });
    }
}

module.exports = ListAllController;
