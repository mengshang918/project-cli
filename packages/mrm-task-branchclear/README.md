# `@ms918/mrm-task-branchclear`

> mrm task,用来配置 branchclear

创建的默认`.branchclear.yml`，如下

```json
branchRegStr: ""
clearPosition: local
clearType: current
ignoreRegStr: ""
isIgnore: false
isReg: false
main: master
remoteName: origin
user:
```

## 默认

`.branchclear.yml`的 user 使用`user-meta`获取

## 用法

```powershell
jnpm install -g @ms918/mrm-task-branchclear
mrm @ms918/mrm-task-branchclear
```

当执行的时候，会走下面步骤：

1. 判断当前路径不存在`.branchclear.yml`，则创建默认
2. 初始化 husky
3. 设置`package.json`
   1. 设置 script branchclera:'branchclear'
   2. 设置 husky.hooks.pre-push 为`exec < /dev/tty && branchclear`
   3. 设置`devDependencies.branchclear-cli`为`^2.0.0`
