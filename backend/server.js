const express = require('express');
const cors = require("cors");

const app = express();
const peopleRoutes = require('./routes/peopleRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const dotenv = require('dotenv')

dotenv.config();

require('./db/mongo'); 

const port = 3001;

app.use(express.json());

app.use(
    cors({
      origin: [process.env.FRONT_URL, "*"],
      methods: ["GET", "POST"],
      allowedHeaders: "*"
    })
  );

app.use('/api', peopleRoutes);
app.use('/api', feedbackRoutes);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});