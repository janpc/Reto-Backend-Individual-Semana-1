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

const projectQuestions = (isGithubUrlSet) => {
  const githubQuestion = isGithubUrlSet
    ? []
    : [
        {
          type: 'input',
          name: 'github_url',
          message: 'Github project URL:'
        }
      ];
  return [
    ...githubQuestion,
    {
      type: 'input',
      name: 'name',
      message: 'Project name:'
    },
    {
      type: 'input',
      name: 'stack',
      message: 'Project stack:'
    },
    {
      type: 'input',
      name: 'url',
      message: 'Deployed project URL:'
    }
  ];
};

const githubQuestions = [
  {
    type: 'input',
    name: 'username',
    message: 'Github username:'
  },
  {
    type: 'input',
    name: 'url',
    message: 'Github url:'
  }
];

module.exports = {
  registerQuestions,
  loginQuestions,
  projectQuestions,
  githubQuestions
};
