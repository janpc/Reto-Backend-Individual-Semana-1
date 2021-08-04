const { createHashedPassword, validateEmail } = require('./helpers');

const registerQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'Your first name and last name'
  },
  {
    type: 'input',
    name: 'username',
    message: 'Your username'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Your email',
    validate: validateEmail
  },
  {
    type: 'password',
    name: 'password',
    message: 'Your password',
    filter: createHashedPassword
  }
];

const loginQuestions = [
  {
    type: 'input',
    name: 'username',
    message: 'Username'
  },
  {
    type: 'password',
    name: 'password',
    message: 'Password'
  }
];

module.exports = {
  registerQuestions,
  loginQuestions
};
