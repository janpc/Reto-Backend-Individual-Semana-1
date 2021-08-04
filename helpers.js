const bcrypt = require('bcrypt');
var fs = require('fs');
const { prompt } = require('inquirer');

const saltRounds = 10;

const createHashedPassword = async (pwrd) => {
  return await bcrypt.hash(pwrd, saltRounds);
};

const comparePassword = async (pwrd, hash) => {
  return await bcrypt.compare(pwrd, hash);
};

const saveUserId = (userId) => {
  const data = JSON.stringify(userId);

  fs.writeFile('./config.json', data, function (err) {
    if (err) {
      return { saved: false, error: err };
    }
    return { saved: true };
  });
};

const readUserId = () => {
  var data = fs.readFileSync('./config.json');

  try {
    userId = JSON.parse(data);
    return userId;
  } catch (err) {
    return false;
  }
};

const askToRelog = async (action) => {
  const userId = readUserId();
  let wantToRegister = true;
  if (userId) {
    const { response } = await prompt({
      type: 'confirm',
      name: 'response',
      message: `You are already logged. Do you want to ${action} with another acount?`
    });
    wantToRegister = response;
  }
  return wantToRegister;
};

module.exports = {
  createHashedPassword,
  comparePassword,
  saveUserId,
  readUserId,
  askToRelog
};
