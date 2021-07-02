const Class = require('../models/Class');
const Module = require('../models/Module');

class ListModulesService {
    async execute() {
        let modules = await Module.find({}, '-__v')
            .collation({ locale: 'pt', strength: 2 })
            .sort({ name: 1 });

        modules = await Promise.all(
            modules.map(async (module) => {
                const count = await Class.where({ module }).countDocuments();
                return { ...module._doc, classQnt: count };
            })
        );

        return modules;
    }
}

module.exports = ListModulesService;
