# `@ms918/mrm-task-readme`

> mrm task,用来创建`README.md`

创建的默认`README.md`，如下

```json
# `packagename`

> package description

## Usage

some api ...
```

## 默认

默认 package name 从 package.json 中获取 name 字段

## 用法

```powershell
npm install -g @ms918/mrm-task-readme
mrm @ms918/mrm-task-readme
```

当执行的时候，会走下面步骤：

1. 判断当前路径不存在`README.md`，则创建默认`README.md`
