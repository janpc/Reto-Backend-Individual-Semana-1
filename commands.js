#!/usr/bin/env node

const program = require('commander');
const { prompt } = require('inquirer');
const { registerUser, userLogin, showUser, createProject } = require('./index');
const {
  registerQuestions,
  loginQuestions,
  projectQuestions
} = require('./questions');
const { askToRelog, isUserRegistered } = require('./helpers');

program.version('1.0.0').description('NUWE user and project CLI manager');

program
  .command('register')
  .alias('r')
  .description('Register a new user')
  .action(async () => {
    const wantToRegister = await askToRelog('resister');

    if (wantToRegister) {
      prompt(registerQuestions).then((answers) => registerUser(answers));
    }
  });

program
  .command('login')
  .alias('l')
  .description('Login to Nuwe')
  .action(async () => {
    const wantToRegister = await askToRelog('log');

    if (wantToRegister) {
      prompt(loginQuestions).then((answers) => userLogin(answers));
    }
  });

program
  .command('user')
  .alias('u')
  .description('Shows the actual user')
  .action(showUser);

program
  .command('submit_repository [url]')
  .alias('l')
  .description('Submit a new project repository')
  .action((url) => {
    const isRegistered = isUserRegistered();
    if (isRegistered) {
      if (url) {
        prompt(projectQuestions(true)).then((answers) =>
          createProject({ github_url: url, ...answers })
        );
      } else {
        prompt(projectQuestions(false)).then((answers) =>
          createProject(answers)
        );
      }
    } else {
      console.info('You are not logged in');
    }
  });

program.parse(process.argv);
