const express = require('express');
const app = express();

// Import the planet router
const planetRouter = require('./crud');

// Mount the planet router
app.use('/', planetRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
