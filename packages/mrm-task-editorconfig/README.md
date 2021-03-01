# `@ms918/mrm-task-editorconfig`

> mrm task,用来创建.editorconfig

创建的默认`.editorconfig`如下

```ini
# editorconfig.org
root = true

[*]
indent_style = tab
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
insert_final_newline = false
trim_trailing_whitespace = false

```

## 默认

indent 默认为 2 个空格

## 用法

```powershell
jnpm install -g @ms918/mrm-task-editorconfig
mrm @ms918/mrm-task-editorconfig
```
