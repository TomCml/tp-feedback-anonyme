const express = require('express');
const cors = require("cors");

const app = express();
const peopleRoutes = require('./routes/peopleRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const port = 3001;
require('./db/mongo'); 


app.use(express.json());

app.use(
    cors({
      origin: [process.env.FRONT_URL, "*"],
      methods: ["GET", "POST"],
      allowedHeaders: "*"
    })
  );

app.use('/peoples', peopleRoutes);
app.use('/feedbacks', feedbackRoutes);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});