const mongoose = require('mongoose');
const { comparePassword, saveUserId, readUserId } = require('./helpers');

//Map global promise - get rid of warning messages
mongoose.Promise = global.Promise;

//conect to db
const db = mongoose.connect('mongodb://localhost:27017/nuwecli', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

//Import models

const User = require('./models/user');
const Project = require('./models/project');

//register
const registerUser = async (user) => {
  try {
    const registeredUser = await User.create(user);
    saveUserId(registeredUser._id);
    console.info('Register completed');
  } catch (err) {
    console.info(err.message);
  }

  mongoose.connection.close();
};

//login
const userLogin = async ({ username, password }) => {
  try {
    const user = await User.findOne({ username });
    const isPasswordCorrect = await comparePassword(password, user.password);

    if (isPasswordCorrect) {
      saveUserId(user._id);
      console.info('Login completed');
    } else {
      console.error('Wrong password');
    }
  } catch (err) {
    console.error(err.message);
  }
  mongoose.connection.close();
};

//showUser
const showUser = async () => {
  try {
    const id = readUserId();
    const fullUser = await User.findOne({ _id: id });
    const { password, _id, __v, ...user } = fullUser._doc;

    console.info(user);
  } catch (err) {
    console.error(err.message);
  }
  mongoose.connection.close();
};

//create Project
const createProject = async (project) => {
  try {
    const userId = readUserId();
    const createdProject = await Project.create({ userId, ...project });
    const userInfo = await User.findOneAndUpdate(
      { _id: userId },
      { $inc: { 'github.repository_count': 1 } }
    ).exec();
  } catch (err) {
    console.error(err.message);
  }

  mongoose.connection.close();
};

//export methods
module.exports = {
  registerUser,
  userLogin,
  showUser,
  createProject
};
