// global variables
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// middleware for parsing different data types
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// public folder host
app.use(express.static('public'));

// routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// PORT listener
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});