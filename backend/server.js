const app = require('./app');
const dotenv = require('dotenv');
dotenv.config();

const port = 3001;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});