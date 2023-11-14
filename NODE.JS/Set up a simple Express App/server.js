const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const asyncErrors = require('express-async-errors');

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json()); // Enable JSON parsing
app.use(morgan('dev')); // Log client requests

// Dummy database of planets
let planets = [
  {
    id: 1,
    name: 'Earth',
  },
  {
    id: 2,
    name: 'Mars',
  },
];

app.get('/planets', (req, res) => {
  res.json(planets);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
