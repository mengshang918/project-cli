# @ms918/mrm-task-cz

> mrm task,用来创建`commitlint`和`commitizen`配置

创建或更新`package.json`，如下

```json
{
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
  "devDependencies": {
    "@commitlint/cli": "^11.0.0",
    "@commitlint/config-conventional": "^11.0.0",
    "commitizen": "^4.2.2",
    "cz-conventional-changelog": "^3.3.0",
    "husky": "^4.3.0"
  },
  "config": {
    "commitizen": {
      "path": "cz-conventional-changelog"
    }
  },
  "scripts": {
    "cz": "cz"
  }
}
```

创建的`commitlint.config.js`如下

```js
module.exports = { extends: ['@commitlint/config-conventional'] }
```

## 用法

```powershell
jnpm install -g @ms918/mrm-task-cz
mrm @ms918/mrm-task-cz
```

当执行的时候，会走下面步骤：

1. 执行`@ms918/mrm-task-husky`操作
2. 配置`commilint`
   1. 使用`yarn` or `npm`安装`@commitlint/config-conventional`、`@commitlint/cli`
   2. 创建或覆盖`commitlint.config.js`文件
   3. 设置`package.json`的`husky.hooks.commit-msg`字段为`commitlint -E HUSKY_GIT_PARAMS`
3. 配置`commitizen`
   1. 使用`yarn` or `npm`安装`commitizen`、`cz-conventional-changelog`
   2. 设置`package.json`的`config.commitizen.path`为`cz-conventional-changelog`
   3. 设置`cz`script
