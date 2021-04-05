// require our modules
const express = require('express');
const morgan = require('morgan');

// initial the express app
const app = express();

//configure settings app.set()

// TODO: require and configure our dotenv module
require('dotenv').config();
require('./config/database');
// TODO: require our database config file


// mount middleware with app.use()
app.use(morgan('dev'));
app.use(express.json()); // converts incoming json into req.body

// mount our routes with app.use()
app.use('/api/skills', require('./routes/api/skills'));

// tell the app listen on port 3001

const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express is listening for AJAX requests on port ${port}`);
});