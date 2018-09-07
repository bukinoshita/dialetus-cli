'use strict'

// Packages
const chalk = require('chalk')

module.exports = ({ dialetus, answer }) => {
  return dialetus[answer].map(({ dialect, meanings, examples }, index) => {
    return console.log(
      `${chalk.bold(`${index + 1}. ${dialect}`)}\nSignificado: ${
        meanings[0]
      }\nExemplo: ${examples[0]}\n`
    )
  })
}
