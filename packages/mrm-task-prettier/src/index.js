/* eslint-disable no-unused-vars */
const path = require('path')
const { getStyleForFile, json, packageJson, install } = require('mrm-core')
const editorConfigToPrettier = require('editorconfig-to-prettier')
const hasYarn = require('has-yarn')

const editor_path = path.join(process.cwd(), '.editorconfig')

module.exports.description = '新增 prettier'

// .editorconfig转换的prettier配置
const editorConfigOptions = editorConfigToPrettier(getStyleForFile(editor_path))

module.exports = ({ indent }) => {
  const options = {
    ...(indent === 'tab'
      ? {
          useTabs: true,
        }
      : {
          useTabs: false,
          indent,
        }),
    ...editorConfigOptions,
    semi: false,
    singleQuote: true,
  }
  json('package.json').set('prettier', options).save()
  packageJson()
    .setScript('prettier', 'prettier --write .')
    .merge({
      devDependencies: {
        prettier: '^2.2.1',
      },
    })
    .save()
  // install('prettier', { yarn: hasYarn(process.cwd()) })
}

module.exports.parameters = {
  indent: {
    type: 'input',
    message: '请选择缩进样式(tabs or number of spaces)',
    default: '2',
    choices: ['tab', 2, 4, 8],
  },
}
