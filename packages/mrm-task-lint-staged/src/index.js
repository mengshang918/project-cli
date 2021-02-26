/* eslint-disable no-unused-vars */
const { json, install } = require('mrm-core')
const initHusky = require('@ms/mrm-task-husky')
const hasYarn = require('has-yarn')
module.exports.description = '新增 lint-staged'

const useYarn = hasYarn(process.cwd())

module.exports = async ({ lintstagedconfig }) => {
  // 初始化husky配置
  await initHusky()
  const pkg = json('package.json')
  let preCommand = pkg.get('husky.hooks.pre-commit')
  if (preCommand) {
    preCommand = preCommand
      .split(' && ')
      .filter((item) => !item.includes('lint-staged'))
      .join(' && ')
  }
  pkg
    .set(
      'husky.hooks.pre-commit',
      preCommand ? `${preCommand} && lint-staged` : 'lint-staged'
    )
    .merge({
      devDependencies: {
        'lint-staged': '^10.5.2',
      },
    })

  // install('lint-staged', { yarn: useYarn })

  if (lintstagedconfig.includes('eslint')) {
    pkg.set('lint-staged["*.{tsx,ts,jsx,js}"]', ['eslint --fix'])
  }
  if (lintstagedconfig.includes('prettier')) {
    const arr = pkg.get('lint-staged["*.{tsx,ts,jsx,js}"]') || []
    arr.push('prettier --write .')
    pkg
      .set('lint-staged["*.{tsx,ts,jsx,js}"]', arr)
      .set('lint-staged["*.{md,mdx}"]', ['prettier --write .'])
  }
  pkg.save()
}

module.exports.parameters = {
  lintstagedconfig: {
    type: 'checkbox',
    message: '请选择需要配置的规则',
    choices: ['eslint', 'prettier'],
    default: ['eslint', 'prettier'],
  },
}
