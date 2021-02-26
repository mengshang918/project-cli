# `@ms/mrm-task-lint-staged`

> mrm task,用来配置`lint-staged`,可选 eslint 和 prettier（需要配合@ms/mrm-task-eslint、@ms/mrm-task-prettier）

创建的默认`package.json`字段如下

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "devDependencies": {
    "husky": "^4.3.0"
  },
  "lint-staged": {
    "*.{tsx,ts,jsx,js}": ["eslint --fix", "prettier --write ."],
    "*.{md,mdx}": ["prettier --write ."]
  }
}
```

## 默认

默认选择 eslint 和 prettier，创建配置如上。

只选择 eslint，创建配置如下

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "devDependencies": {
    "husky": "^4.3.0"
  },
  "lint-staged": {
    "*.{tsx,ts,jsx,js}": ["eslint --fix"]
  }
}
```

只选择 prettier，创建配置如下

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "devDependencies": {
    "husky": "^4.3.0"
  },
  "lint-staged": {
    "*.{tsx,ts,jsx,js}": ["prettier --config .prettierrc.yml --write"],
    "*.{md,mdx}": ["prettier --config .prettierrc.yml --write"]
  }
}
```

## 用法

```powershell
jnpm install -g @ms/mrm-task-lint-staged
mrm @ms/mrm-task-lint-staged
```

当执行的时候，会走下面步骤：

1. 执行`@ms/mrm-task-husky`步骤
2. 判断`husky.pre-commit`是否有脚本
   1. 有，则设置`husky.pre-commit`为`之前脚本 && lint-staged`
   2. 无，则设置`husky.pre-commit`为`lint-staged`
3. `yarn`or`npm`安装`lint-staged`
4. 设置`package.json`的`lint-staged`字段为上述所示
