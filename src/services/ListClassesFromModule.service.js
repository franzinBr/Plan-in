const Module = require('../models/Module');
const { isValidObjectId } = require('mongoose');
const ErrorResponse = require('../utils/ErrorResponse');
const Class = require('../models/Class');

class ListClassesFromModuleService {
    async execute(_id) {
        if (!isValidObjectId(_id))
            throw new ErrorResponse('This module does not exist', 404);

        const moduleExists = await Module.findById(_id);
        if (!moduleExists)
            throw new ErrorResponse('This module does not exist', 404);

        const classes = await Class.find({ module: moduleExists })
            .collation({ locale: 'pt', strength: 2 })
            .sort({ name: 1 });

        return { name: moduleExists.name, classes };
    }
}

module.exports = ListClassesFromModuleService;
