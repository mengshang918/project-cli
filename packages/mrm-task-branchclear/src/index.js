const initHusky = require('@ms918/mrm-task-husky')
const { json, packageJson, yaml } = require('mrm-core')
const { name } = require('user-meta')

const script = 'exec < /dev/tty && branchclear'

module.exports.description = '新增 branchclear'

module.exports = async () => {
  yaml('.branchclear.yml', {
    branchRegStr: '',
    clearPosition: 'local',
    clearType: 'current',
    ignoreRegStr: '',
    isIgnore: false,
    isReg: false,
    main: 'master',
    remoteName: 'origin',
    user: name,
  }).save()
  await initHusky()
  packageJson().setScript('branchclear', 'branchclear').save()
  const pkg = json('package.json')
  const prePush = pkg.get('husky.hooks.pre-push', script)
  pkg
    .set(
      'husky.hooks.pre-push',
      prePush.indexOf(script) > -1 ? prePush : `${prePush} && ${script}`
    )
    .set('devDependencies.branchclear-cli', '^2.0.0')
    .save()
}
