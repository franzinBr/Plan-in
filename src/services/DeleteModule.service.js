const { isValidObjectId } = require('mongoose');
const Module = require('../models/Module');
const Class = require('../models/Class');
const ErrorResponse = require('../utils/ErrorResponse');

class DeleteModuleService {
    async execute(_id) {
        if (!isValidObjectId(_id))
            throw new ErrorResponse('This module does not exist', 404);

        const moduleExits = await Module.findById(_id);
        if (!moduleExits)
            throw new ErrorResponse('This module does not exist', 404);

        const deleteClasses = await Class.deleteMany({ module: moduleExits });

        const moduleDeleted = await Module.deleteOne({ _id });
        if (!moduleDeleted) throw new ErrorResponse('Error deleting module');

        return moduleExits.name;
    }
}

module.exports = DeleteModuleService;
