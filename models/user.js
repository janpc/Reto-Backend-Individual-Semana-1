const mongoose = require('mongoose');

// User Schema
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    default: ''
  },
  username: {
    type: String,
    default: '',
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: [true, 'The email is required'],
    trim: true,
    unique: true
  },
  password: {
    type: String,
    default: '',
    trim: true
  },
  github: {
    username: {
      type: String,
      default: '',
      trim: true
    },
    url: {
      type: String,
      default: '',
      trim: true
    },
    repository_count: {
      type: Number,
      default: 0
    }
  }
});

//Define and export
module.exports = mongoose.model('user', UserSchema);
