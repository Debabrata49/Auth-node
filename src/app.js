require('dotenv').config();
const express = require('express');
const path = require('path');
const routes = require('./routes/authRoutes');
const connectDB = require('./db');

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(express.json());
app.use('/', routes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});