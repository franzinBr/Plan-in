const Module = require("../models/Module");
const ErrorResponse = require("../utils/ErrorResponse");

class EditModuleService {
    async execute(_id, name) {
        const moduleExists = await Module.findById(_id)
        if(!moduleExists) throw new ErrorResponse('This module does not exist', 404);

        if(name === moduleExists.name) throw new ErrorResponse('Name identical to the original', 400);

        await moduleExists.updateOne({name});
        const moduleEdited = await Module.findById(_id);

        return moduleEdited;
    }
}

module.exports = EditModuleService;