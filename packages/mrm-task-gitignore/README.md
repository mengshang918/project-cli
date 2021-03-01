# `@ms918/mrm-task-gitignore

> mrm task,用来创建`.gitignore`

创建的默认`.gitignore`，如下

```
.DS_*
*.log
logs
node_modules/
.idea/
.vscode/
*.sublime*
```

会根据当前路径下是否存在`package-lock.json` 和`yarn.lock`来判断当前用的是`npm`还是`yarn`

## 用法

```powershell
jnpm install -g @ms918/mrm-task-gitignore
mrm @ms918/mrm-task-gitignore
```

当执行的时候，会走下面步骤：

1. 会根据当前路径下是否存在`package-lock.json` 和`yarn.lock`来判断当前用的是`npm`还是`yarn`
2. 添加`.gitignore`
