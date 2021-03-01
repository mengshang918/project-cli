# `@ms918/mrm-task-prettier`

> mrm task,用来创建`package.json`的`prettier`字段

创建的默认`prettier`字段如下

```json
{
  "prettier": {
    "useTabs": false,
    "indent": 2,
    "semi": false,
    "singleQuote": true
  }
}
```

## 默认

- 默认读取`.editorconfig`,使用`editorconfig-to-prettier`
- 没有.editorconfig，默认 indent 为 2

## 用法

```powershell
jnpm install -g @ms918/mrm-task-prettier
mrm @ms918/mrm-task-prettier
```

当执行的时候，会走下面步骤：

1. 判断当前路径下是否存在`.editorconfig`
   1. 存在使用`.editorconfig`中一些配置
   2. 不存在使用默认`indent`为 2
2. 设置`package.json`的`prettier`字段
3. 设置`package.json`
   1. 设置`prettier`字段
   2. 设置`prettier`script
4. `yarn`or`npm`安装`prettier`
