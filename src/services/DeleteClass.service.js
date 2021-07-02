const { isValidObjectId } = require("mongoose");
const Class = require("../models/Class");
const ErrorResponse = require("../utils/ErrorResponse");

class DeleteClassService {
    async execute(_id){

        if(!isValidObjectId(_id)) throw new ErrorResponse('This class does not exist', 404);

        const classExits = await Class.findById(_id);
        if(!classExits) throw new ErrorResponse('This Class does not exist', 404);

        const classDeleted = await Class.deleteOne({_id})

        return classExits.name;
    }
}

module.exports = DeleteClassService