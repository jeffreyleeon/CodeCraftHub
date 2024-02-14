const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/config');
const routes = require('./src/routes/userRoutes');

const app = express();

// Connect to MongoDB
console.log(`MongoDB url: ${config.mongoURI}`);
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Middleware
app.use(express.json());

// Routes
app.use('/api', routes);

// Start the server
app.listen(config.port, () => {
  console.log(`Server started on port ${config.port}`);
});
