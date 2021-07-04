const Class = require('../models/Class');
const Module = require('../models/Module');

class ListAllService {
    async execute() {
        let modules = await Module.find({}, '-__v')
            .collation({ locale: 'pt', strength: 2 })
            .sort({ name: 1 });

        modules = await Promise.all(
            modules.map(async (module) => {
                const classes = await Class.find({ module }, '-__v')
                    .collation({ locale: 'pt', strength: 2 })
                    .sort({ name: 1 });
                return { ...module._doc, classes };
            })
        );

        return modules;
    }
}

module.exports = ListAllService;
