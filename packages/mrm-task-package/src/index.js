const path = require('path')
const meta = require('user-meta')
const { json, packageJson } = require('mrm-core')

/**
 * 将defaultPkg中用户不存在的字段设置到pkg
 * @param {*} pkg
 * @param {*} defaultPkg
 */
const handlePkg = (pkg, defaultPkg) => {
  const userPkg = pkg.get()
  for (let i in defaultPkg) {
    if (!userPkg[i]) {
      pkg.set(i, defaultPkg[i])
    }
  }
}

module.exports = function task({ package }) {
  const { name, url, email } = meta

  const defaultPackage = {
    name: package,
    version: '1.0.0',
    description: '',
    author: {
      ...(name ? { name } : null),
      ...(email ? { email } : null),
      ...(url ? { url } : null),
    },
    homepage: '',
    license: 'MIT',
    main: 'src/index.js',
    files: ['src'],
    scripts: {},
    keywords: [],
    dependencies: {},
    devDependencies: {},
  }
  // Create package.json
  const pkg = json('package.json', defaultPackage)
  // Update
  if (pkg.exists()) {
    pkg.merge({
      name: package,
    })
    handlePkg(pkg, defaultPackage)
  }

  pkg.save()
}

module.exports.description = 'Adds package.json'

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
