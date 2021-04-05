// TODO: create a skill model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// This model specs

const skillSchema = new Schema({
  skill: String,
  level: String
}, { timestamp: true });
// This model needs to have:
// skill field set to String
// level field set to String
// validation are optional
// timestamps set to true

// make sure to module.exports your call mongoose.model
module.exports = mongoose.model('Skill', skillSchema);