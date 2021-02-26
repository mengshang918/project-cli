const { ini } = require('mrm-core')

//[*] 通用规则
const commonRules = {
  charset: 'utf-8',
  end_of_line: 'lf',
  insert_final_newline: true,
  trim_trailing_whitespace: true,
}

//[.md] md规则
const mdRules = {
  insert_final_newline: false,
  trim_trailing_whitespace: false,
}

module.exports = function task({ indent }) {
  const generalRules = Object.assign(
    indent === 'tab'
      ? {
          indent_style: 'tab',
        }
      : {
          indent_style: 'space',
          indent_size: indent,
        },
    commonRules
  )

  // .editorconfig
  const editorconfig = ini('.editorconfig', 'editorconfig.org')
  editorconfig
    .set('_global', { root: true })
    .set('*', generalRules)
    .set('*.md', mdRules)
    .save()
}

module.exports.description = 'Adds EditorConfig'
module.exports.parameters = {
  indent: {
    type: 'input',
    message: '请选择缩进样式(tabs or number of spaces)',
    default: '2',
    choices: ['tab', 2, 4, 8],
  },
}
