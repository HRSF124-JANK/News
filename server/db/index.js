const mongoose = require('mongoose');
const mongoUri = 'mongodb://database/news';

const db = mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })

module.exports = db;
