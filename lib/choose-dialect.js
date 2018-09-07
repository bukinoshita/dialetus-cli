'use strict'

// Packages
const inquirer = require('inquirer')

module.exports = ({ options }) => {
  const choices = Object.keys(options).map(choice => {
    return { name: choice, value: choice }
  })

  return inquirer.prompt([
    {
      type: 'list',
      name: 'answer',
      default: `baianes`,
      message: 'Escolha um dialeto',
      choices
    }
  ])
}
