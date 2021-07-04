const Module = require('../models/Module');
const ErrorResponse = require('../utils/ErrorResponse');

class CreateModuleService {
    async execute(name) {
        const moduleAlreadyExits = await Module.findOne({ name });
        if (moduleAlreadyExits)
            throw new ErrorResponse('Module Already Exits', 409);

        const module = await Module.create({ name });
        if (!module) throw new ErrorResponse('Error');

        return {
            _id: module._id,
            name: module.name,
            createdAt: module.createdAt,
            updatedAt: module.updatedAt,
            classes: [],
        };
    }
}

module.exports = CreateModuleService;
