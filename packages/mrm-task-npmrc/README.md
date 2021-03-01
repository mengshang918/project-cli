# `@ms918/mrm-task-npmrc`

> mrm task,用来创建.npmrc

创建的默认`.npmrc`如下

```
registry=https://registry.yarnpkg.com/
```

## 默认

- 默认不设置 scope

- 默认 registry 为https://registry.yarnpkg.com/

## 用法

```powershell
npm install -g @ms918/mrm-task-npmrc
mrm @ms918/mrm-task-npmrc
```

当执行的时候，会走下面步骤：

1. 判断当前路径下是否存在`.npmrc`，存在则删除包含有 registry 的行
2. 判断是否有 scope
   - 没有 scope，只设置 registry
   - 有 scope，除了执行上面步骤之外，还会添加@scope:registry
