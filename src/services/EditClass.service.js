const Module = require('../models/Module');
const Class = require('../models/Class');
const ErrorResponse = require('../utils/ErrorResponse');
const { isValidObjectId } = require('mongoose');

class EditClassService {
    async execute(_id, name, module_id, date) {
        if (!isValidObjectId(_id))
            throw new ErrorResponse('This class does not exist', 404);
        const classExists = await Class.findById(_id);
        if (!classExists)
            throw new ErrorResponse('This class does not exists', 404);

        let newClass = {};

        if (module_id && module_id !== classExists.module._id) {
            const moduleExists = await Module.findById(module_id);
            if (!moduleExists)
                throw new ErrorResponse('This module does not exists', 404);
            newClass = {
                ...newClass,
                module: moduleExists,
            };
        }

        if (name && name !== classExists.name) {
            newClass = {
                ...newClass,
                name,
            };
        }

        if (date && date !== classExists.date) {
            newClass = {
                ...newClass,
                date,
            };
        }

        if (Object.keys(newClass).length === 0)
            throw new ErrorResponse('No fields have been modified', 400);

        await classExists.updateOne(newClass);
        const classEdited = await Class.findById(_id).populate('module');

        return classEdited;
    }
}

module.exports = EditClassService;
