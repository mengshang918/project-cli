/* eslint-disable no-unused-vars */
const { json, install, packageJson } = require('mrm-core')
const hasYarn = require('has-yarn')
const execa = require('execa')
module.exports.description = '新增 eslint'

const eslintConfigName = '@ms918/eslint-config-react'

module.exports = () => {
  let peerDependencies = execa.commandSync(
    'npm view eslint-config-react-app peerDependencies'
  ).stdout
  let version = execa.commandSync(`npm view ${eslintConfigName} version`).stdout
  peerDependencies = eval(`(${peerDependencies})`)
  // install(
  //   { [eslintConfigName]: version, ...peerDependencies },
  //   { yarn: hasYarn(process.cwd()) }
  // )
  json('package.json')
    .set('eslintConfig.extends', eslintConfigName)
    .merge({
      devDependencies: { [eslintConfigName]: version, ...peerDependencies },
    })
    .save()
  packageJson().setScript('eslint', 'eslint --fix .').save()
}
