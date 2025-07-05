const express = require('express');
const app = express();
const router = require('./Routes/ussdRoute');
require('dotenv').config();

const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: false })); // Needed for USSD form POST


// USSD routes
app.use('/ussd', router);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
