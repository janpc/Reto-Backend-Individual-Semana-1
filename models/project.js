const mongoose = require('mongoose');

// Project Schema
const ProjectSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user'
  },
  name: {
    type: String,
    default: '',
    trim: true
  },
  stack: {
    type: String,
    default: ''
  },
  github_url: {
    type: String,
    default: '',
    trim: true
  },
  url: {
    type: String,
    default: '',
    trim: true
  }
});

//Define and export
module.exports = mongoose.model('project', ProjectSchema);
