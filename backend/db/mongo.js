const mongoose = require('mongoose');
const Feedback = require('../models/feedbackModel');
const People = require('../models/peopleModel');
require('dotenv').config();


const mongoURL = process.env.MONGODB_URI 

mongoose.connect(mongoURL,{dbName: 'feedback-anonyme'})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

const db = {
    async getPeople() {  
        return await People.find().sort({ category: 1, name: 1 });
      },

    async createFeedback(feedbackData) {
        const feedback = new Feedback(feedbackData);
        return await feedback.save();
    },

    async getFeedbacks() {
        return await Feedback.find();
    }
};

module.exports = db;
