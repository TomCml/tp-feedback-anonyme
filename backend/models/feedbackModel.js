const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    people: {
        name: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true,
            enum: ['student', 'teacher']
        }
    },
    feedback: {
        type: String,
        required: true,
        trim: true
    }
}, { collection: 'feedback' }); 

module.exports = mongoose.model('Feedback', feedbackSchema, 'feedback'); 
