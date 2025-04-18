const express = require('express');
const app = express();
const peopleRoutes = require('./routes/peopleRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const port = 3001;

app.use(express.json());

app.use('/peoples', peopleRoutes);
app.use('/feedbacks', feedbackRoutes);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});