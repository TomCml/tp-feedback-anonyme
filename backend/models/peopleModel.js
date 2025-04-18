const mongoose = require('mongoose');

const peopleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['student', 'teacher'],
        required: true
    }
});

module.exports = mongoose.model('People', peopleSchema, 'people');
