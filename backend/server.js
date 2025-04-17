const express = require('express');
const app = express();
const peopleRoutes = requires('./routes/peopleRoutes');
const feedbackRoutes = requires('./routes/feedbackRoutes');
const port = 3001;

app.use(express.json());

app.use('/people', peopleRoutes);
app.use('/feedback', feedbackRoutes);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});