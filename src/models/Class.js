const mongoose = require('mongoose');

const ClassSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "NameClass is required"]
    },
    module: {
        type: mongoose.Types.ObjectId,
        ref: 'Module'
    },
    date: {
        type: Date,
    }
}, {timestamps: true})

const Class = mongoose.model('Class', ClassSchema);

module.exports = Class;