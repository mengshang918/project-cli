const { lines, json } = require('mrm-core')
const { defaultBrowsers } = require('react-dev-utils/browsersHelper')

module.exports.description = '新增 browserlist'

module.exports = () => {
  const hasBrowserslist = lines('.browserslistrc').exists()
  const pkg = json('package.json')
  const pkgBrowserlist = pkg.get('browserlist')
  // 没有.browserslistrc文件
  if (!hasBrowserslist) {
    // package.json是否有browserlist字段
    const length = Array.isArray(pkgBrowserlist)
      ? pkgBrowserlist.length
      : pkgBrowserlist instanceof Object
      ? Object.keys(pkgBrowserlist).length
      : 0
    const isEmpty = length === 0
    if (!pkgBrowserlist || isEmpty) {
      pkg.set('browserlist', defaultBrowsers).save()
    }
    // 没有browserlist字段||有browserlist字段但没有值 设置默认值
  } else {
    // 判断是否为空，为空设置默认
    pkg.set('browserlist', defaultBrowsers).save()
  }
}
