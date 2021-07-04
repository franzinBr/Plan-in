const Class = require('../models/Class');
const Module = require('../models/Module');
const ErrorResponse = require('../utils/ErrorResponse');

class CreateClassService {
    async execute(name, module_id, date) {
        const module = await Module.findById(module_id);
        if (!module) throw new ErrorResponse('Module does not exists', 404);

        const classPlan = await Class.create({ name, module, date });

        return {
            _id: classPlan._id,
            name: classPlan.name,
            module: classPlan.module._id,
            date: classPlan.date,
            createdAt: classPlan.createdAt,
            updatedAt: classPlan.updatedAt,
        };
    }
}

module.exports = CreateClassService;
