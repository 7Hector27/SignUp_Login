const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

// Import of database
const connectDb = require('./database/db');

// Utilization
app.use(cors());

connectDb();

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});
