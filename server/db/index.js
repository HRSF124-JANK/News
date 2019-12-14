const mongoose = require('mongoose');
const env = process.env.NODE_ENV;
const mongoUri = `mongodb://database/news`;

const db = mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })

module.exports = db;
