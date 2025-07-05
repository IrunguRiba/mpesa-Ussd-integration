const express = require('express');
const app = express();
const router = require('./Routes/ussdRoute');
require('dotenv').config();

const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: false })); // Needed for USSD form POST

// Health check or test endpoint
app.post('/api/ussd', (req, res) => {
    res.status(200).json({
        message: 'Welcome to USSD API',
        status: 'success'
    });
});

// USSD routes
app.use('/ussd', router);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
