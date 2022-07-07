#! /usr/bin/env node

require("yargonaut")
  .style('blue')
  .style('yellow', 'required')
  .help('Cybermedium')
  .helpStyle('green')
  .errorsStyle('red.bold.underline')

const { exec } = require("child_process") 
const { log } = require("console")

let opt = require("yargs")
  .usage(
    "Just using to making vue3-vite project as fast as u want :D"
  )

  .command('run', 'starting up vite initor')
  
  .option('n', {
    alias: 'name',
    describe: 'setting up your project name',
    demand: true
  })

  .option('t', {
    alias: 'type',
    describe: 'select your project type',
    choices: ['vanilla', 'vue', 'react', 'preact', 'lit', 'svelte'],
    default: 'vue'
  })

  .example('$0 run -n untitled-project -t vue', 'Created [vue] project named [unitledProject]')
    
  .wrap(null)
  .showHelpOnFail(true)
  .strict()

  .argv

let name = `${opt.n}`
let type = `${opt.t}`

console.log('\x1b[32m' ,'yarn Checking~')

exec("yarn --version", (error, stdout, stderr) => {
  if(error) {
    console.log(`error: ${error.message}`)
  }

  if(stderr) {
    console.log(`stderr: ${stderr}`)
  }

  console.log('\x1b[36m', 'yarn Ready!')
  console.log('\x1b[36m', 'yarn Ready!')
})