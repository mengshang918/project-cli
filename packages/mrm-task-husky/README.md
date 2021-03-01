# @ms918/mrm-task-husky

> mrm task,用来创建`husky`配置

创建的默认`huksy`，如下

```json
{
  "husky": {
    "hooks": {}
  }
}
```

## 用法

```powershell
jnpm install -g @ms918/mrm-task-husky
mrm @ms918/mrm-task-husky
```

当执行的时候，会走下面步骤：

1. 判断当前文件夹是否存在`.git`文件
   - 存在，则进行下面步骤`2`-`4`初始化 husky 操作
   - 不存在，则先`git init`
2. 判断当前使用 npm 还是 yarn
3. npm or yarn install husky
4. package.json 判断是否有 husky.hooks 字段
   - 有则认为用户已经设置了 husky 环境，直接退出
   - 没有则设置
