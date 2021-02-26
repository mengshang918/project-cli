const fs = require('fs')
const { lines } = require('mrm-core')

module.exports = function task() {
  const remove = ['node_modules']
  const add = [
    '.DS_*',
    '*.log',
    'logs',
    'node_modules/',
    '.idea/',
    '.vscode/',
    '*.sublime*',
    'dist',
    '.eslintcache',
  ]

  // If project uses npm, ignore yarn.lock
  if (fs.existsSync('package-lock.json')) {
    add.push('yarn.lock')
    remove.push('package-lock.json')
  }

  // If project uses Yarn, ignore package-lock.json
  if (fs.existsSync('yarn.lock')) {
    remove.push('yarn.lock')
    add.push('package-lock.json')
  }

  // .gitignore
  lines('.gitignore').remove(remove).add(add).save()
}

module.exports.description = 'Adds .gitignore'
