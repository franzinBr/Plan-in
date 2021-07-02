const mongoose = require('mongoose');

const ModuleSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
    },
    { timestamps: true }
);

const Module = mongoose.model('Module', ModuleSchema);

module.exports = Module;
