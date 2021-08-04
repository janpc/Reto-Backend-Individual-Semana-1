#!/usr/bin/env node

const program = require('commander');
const { prompt } = require('inquirer');
const { registerUser, userLogin, showUser } = require('./index');
const { registerQuestions, loginQuestions } = require('./questions');
const { askToRelog } = require('./helpers');

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

program.parse(process.argv);
