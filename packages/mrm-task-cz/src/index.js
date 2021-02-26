/* eslint-disable no-unused-vars */
/*
 * 初始化cz相关配置 commitlint 和 commitizen
 * @Author: jiangxiaowei
 * @Date: 2020-11-30 12:08:09
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2020-12-07 15:39:19
 */
const { json, install, lines, packageJson } = require('mrm-core')
const hasYarn = require('has-yarn')
const initHusky = require('@ms/mrm-task-husky')
module.exports.description = '新增 commitlint和commitizen'

const useYarn = hasYarn(process.cwd())

// 初始化commitizen
const initCommitizen = () => {
  // install(['commitizen', 'cz-conventional-changelog'], { yarn: useYarn })
  json('package.json')
    .set('config.commitizen.path', 'cz-conventional-changelog')
    .set('devDependencies.commitizen', '^4.2.2')
    .set('devDependencies.cz-conventional-changelog', '^3.3.0')
    .save()
  packageJson('package.json').appendScript('cz', 'cz').save()
}

// 初始化commitlint
const initCommitlint = () => {
  // install(['@commitlint/config-conventional', '@commitlint/cli'], {
  //   yarn: useYarn,
  // })
  lines('commitlint.config.js')
    .set(["module.exports = { extends: ['@commitlint/config-conventional'] }"])
    .save()
  json('package.json')
    .set('husky.hooks.commit-msg', 'commitlint -E HUSKY_GIT_PARAMS')
    .set('devDependencies.@commitlint/config-conventional', '^11.0.0')
    .set('devDependencies.@commitlint/cli', '^11.0.0')
    .save()
  initCommitizen()
}

module.exports = async () => {
  // 初始化husky相关配置
  await initHusky()
  initCommitlint()
  initCommitizen()
}
