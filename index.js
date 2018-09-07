#!/usr/bin/env node
'use strict'

// Packages
const meow = require('meow')
const updateNotifier = require('update-notifier')
const request = require('request-promise-native')
const ora = require('ora')
const SaveLocal = require('save-local')

// Lib
const chooseDialect = require('./lib/choose-dialect')
const dictionary = require('./lib/dictionary')

const saveLocal = new SaveLocal('.dialetus')

const cli = meow(
  `
 Usage:
   $ dialetus            Show dictionary

 Options:
   -h, --help            Show help options
   -v, --version         Show version
`,
  {
    alias: {
      h: 'help',
      v: 'version'
    }
  }
)

updateNotifier({ pkg: cli.pkg }).notify()

const run = async () => {
  const spinner = ora(`Carregando dialetus...`)

  try {
    spinner.start()
    const { dialetus } = JSON.parse(
      await request(`https://dialetus-service.now.sh/dialect`)
    )

    spinner.stop()

    saveLocal.set({ name: 'dialetus', value: JSON.stringify(dialetus) })
    const { answer } = await chooseDialect({ options: dialetus })
    dictionary({ dialetus, answer })
  } catch (error) {
    console.log(error)
    const dialetus = await saveLocal.get('dialetus')
    const { answer } = await chooseDialect({ options: dialetus })
    dictionary({ dialetus, answer })
  }
}

run(cli)
