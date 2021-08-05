# Reto-Backend-Individual-Semana-1

This is my project for the Nuwe Backend Indivisual challenge (week 1) . It's a simple CLI to manage NUWE users and projects.

## Start 🚀

Get a clone of the project in local. You need to have installed nodejs in your computer to develop the proyect.


### Requirements 📋

_You need to install nodejs_


### Instalation 🔧

_First clone the repository_

```
git clone https://github.com/janpc/Reto-Backend-Individual-Semana-1
```

_Then run npm install in the base folder_

```
npm install
```

_When you have all the denpedencies you can link the project and start using it_

```
npm link
```

## Commands
This are all the commands implemented:

_If you want to register a user_

```
nuwe register 
```

_If you want to login as a user_

```
nuwe login
```

_To see the current user information_

```
nuwe user
```

_To create a project from a github url_

```
nuwe submit_repository [url]
```

_To set up the current user's information_

```
nuwe github_config
```

## Build with 🛠️

- [nodejs](https://nodejs.org/en/)
- [commander](https://tidelift.com/subscription/pkg/npm-commander?utm_source=npm-commander&utm_medium=referral&utm_campaign=enterprise&utm_term=repo)
- [inquirer](https://github.com/SBoudrias/Inquirer.js#readme)