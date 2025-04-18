const express = require('express');
const cors = require('cors');
const feedbackRoutes = require('./routes/feedbackRoutes');
const peopleRoutes = require('./routes/peopleRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/feedbacks', feedbackRoutes);
app.use('/peoples', peopleRoutes);

module.exports = app;
