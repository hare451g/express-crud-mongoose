// require to read .env file
const mongoose = require('../utils/configs');

const todoSchema = new mongoose.Schema({
    name: String,
    completed: Boolean,
});

module.exports = todoSchema;