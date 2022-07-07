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

console.log('')
console.log('\x1b[36m' ,'yarn Checking~')
console.log('')

exec("yarn --version", (error, stdout) => {
  if(error) {
    console.log('\x1b[31m', 'yarn not found')
    console.log('\x1b[0m', "please install 'yarn' first!")
  }
  
  if(stdout) {
    console.log('\x1b[32m', 'yarn Ready!')
    console.log('')
    console.log('\x1b[36m' ,'Creating project~')
    console.log('\x1b[0m', "Tooltips: if it's struck, just 'CTRL+C' or using anything that can used to stop this process")
    console.log('')
    
    exec(`yarn create vite ${name} --template ${type}`, (error, stdout) => {
      if(error) {
        console.log('\x1b[31m', error);
      }

      if(stdout) {
        console.log('\x1b[32m', 'Project Folder Ready!')
        console.log('\x1b[0m', "Please wait for me for a while :(")
        console.log('')

        console.log('\x1b[36m' ,'yarn is now installing your package~')
        console.log('')

        exec(`cd ${name}`, (error, stdout) => {
          if(error) {
            console.log('\x1b[31m', error);
          }

          exec(`yarn`, (error, stdout) => {
            if(error) {
              console.log('\x1b[31m', error);
            }
            
            if(stdout) {
              console.log(stdout);
              console.log('\x1b[32m', "Setting up is now complete, now it's your coding time :D")
              console.log('\x1b[32m', "now just run :")
              console.log('')
              console.log('\x1b[32m', `      cd ${name}`)
              console.log('\x1b[32m', `      yarn dev`)
              console.log('')
              console.log('\x1b[32m', "and then init your project by yourself :)")
            }
          })
        })
      }
    })
  }
})