const { lines, json } = require('mrm-core')

module.exports.description = '添加 .npmrc'
module.exports = ({ registry, scope }) => {
  const npmrc = lines('.npmrc')
  const registryArr = [`registry=${registry}`]
  if (scope) {
    registryArr.unshift(`@${scope}:registry=${registry}`)
  }
  if (npmrc.exists()) {
    npmrc.remove(['registry'])
  }
  npmrc.set(registryArr).save()

  const pkg = json('package.json')
  if (pkg.exists()) {
    pkg.set('publishConfig.registry', registry).save()
  }
}

module.exports.parameters = {
  registry: {
    type: 'input',
    default: 'https://registry.yarnpkg.com/',
    validate: (val) => (val ? true : 'registry必填'),
    message: '请输入registry',
  },
  scope: {
    type: 'input',
    message: '请输入scope名字,不带@（非必填）',
  },
}
