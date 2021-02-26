# `@ms/mrm-task-eslint`

> mrm task,用来创建`package.json`的`eslintConfig`字段

创建的默认`eslintConfig`字段如下

```json
{
  "eslintConfig": {
    "extends": "@ms/eslint-config-react"
  }
}
```

## 用法

```powershell
jnpm install -g @ms/mrm-task-eslint
mrm @ms/mrm-task-eslint
```

当执行的时候，会走下面步骤：

1. 获取`eslint-config-react-app`的相对依赖
2. 获取`@ms/eslint-config-react`的最新版本
3. `yarn`o r`install`安装`eslint-config-react-app`的相对依赖和`@ms/eslint-config-react`
4. 设置`package.json`的`eslintConfig.extends`为`@ms/eslint-config-react`
