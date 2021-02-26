/* eslint-disable no-unused-vars */
const fs = require('fs')
const path = require('path')
const execa = require('execa')
const hasYarn = require('has-yarn')
const { install, json } = require('mrm-core')

module.exports.description = '新增 husky'

/**
 * 初始化husky
 * @param {string} cwd 当前路径
 */
const initHusky = (cwd) => {
  const useYarn = hasYarn(cwd)
  const pkg = json('package.json')
  if (!pkg.get('husky.hooks')) {
    pkg
      .merge({
        husky: {
          hooks: {},
        },
        devDependencies: {
          husky: '^4.3.0',
        },
      })
      .save()
    // install('husky', { yarn: useYarn })
  }
}

module.exports = async () => {
  const cwd = process.cwd()
  // 是否存在.git
  const hasGit = fs.existsSync(path.join(cwd, '.git'))
  if (!hasGit) {
    execa.commandSync('git init')
    initHusky(cwd)
  } else {
    initHusky(cwd)
  }
}
