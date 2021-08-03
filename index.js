const mongoose = require('mongoose');

//Map global promise - get rid of warning messages
mongoose.Promise = global.Promise;

//conect to db
const db = mongoose.connect('mongodb://localhost:27017/nuwecli', {
  useMongoClient: true
});
