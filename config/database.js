// TODO: establish a connection to MongoDB
const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect(process.env.DATABASE_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,

});

db.on('connected', function() {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});