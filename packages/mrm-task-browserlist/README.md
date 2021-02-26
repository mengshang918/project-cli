# `@ms/mrm-task-browserlist`

> mrm task,用来创建[browserlist](https://github.com/browserslist/browserslist)

创建的默认`browserlist`使用`react-dev-util`的`defaultBrowsers`，如下

```json
{
  "production": [">0.2%", "not dead", "not op_mini all"],
  "development": [
    "last 1 chrome version",
    "last 1 firefox version",
    "last 1 safari version"
  ]
}
```

## 用法

```powershell
jnpm install -g @ms/mrm-task-browserlist
mrm @ms/mrm-task-browserlist
```

当执行的时候，会走下面步骤：

1. 判断当前路径下是否存在`.browserslistrc`。存在则不操作，退出
2. 不存在则判断`package.json`是否含有`browserlist`字段且字段为空
   - 为空则设置默认值
   - 不为空直接退出
