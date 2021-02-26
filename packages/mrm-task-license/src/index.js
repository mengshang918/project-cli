const path = require('path')
const meta = require('user-meta')
const parseAuthor = require('parse-author')
const { template, packageJson } = require('mrm-core')

function getAuthorName(pkg) {
  const rawName = pkg.get('author.name') || pkg.get('author') || ''
  return parseAuthor(rawName).name
}

module.exports = ({ author }) => {
  const templateFile = path.join(__dirname, 'template/MIT.md')

  template('LICENSE', templateFile)
    .apply({
      author,
      year: new Date().getFullYear(),
    })
    .save()

  packageJson().set('license', 'MIT').save()
}
module.exports.description = 'Adds license file'
module.exports.getAuthorName = getAuthorName

module.exports.parameters = {
  author: {
    type: 'input',
    message: '请输入作者名字',
    default: () => getAuthorName(packageJson()) || meta.name,
    validate(value) {
      return value ? true : 'Author name is required'
    },
  },
}
