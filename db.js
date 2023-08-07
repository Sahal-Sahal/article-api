// db.js
const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://localhost:27017/article-db';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to database');
});

db.on('error', (error) => {
  console.error('Database connection error:', error);
});

module.exports = db;
