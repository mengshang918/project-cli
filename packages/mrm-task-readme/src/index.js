const path = require('path')
const { packageJson, template } = require('mrm-core')
module.exports.description = '新增 readme'

module.exports = ({ package }) => {
  // TODO 判断当前路径没有readme或有readme但是为空再创建
  const readme = template(
    'README.md',
    path.join(__dirname, '/template/readme.md')
  )
  if (!readme.exists()) {
    readme
      .apply({
        package,
      })
      .save()
  }
}

module.exports.parameters = {
  package: {
    type: 'input',
    default: () => packageJson().get('name') || path.basename(process.cwd()),
    message: '请输入package namee',
    validate(value) {
      return value ? true : 'Package name is required'
    },
  },
}
