# `@ms918/mrm-task-package`

> mrm task,用来配置`package`

创建的默认`package.json`如下

```js
{
    name: '',
    version: '1.0.0',
    description: '',
    author: {
      name:'',
      email:'',
      url:''
    },
    homepage: '',
    license: 'MIT',
    main: 'index.js',
    files: ['index.js'],
    scripts: {},
    keywords: [],
    dependencies: {},
    devDependencies: {},
  }
```

## 默认

作者名字、邮箱、主页，使用`user-meta`获取，若之前设置则使用之前设置的值。

## 用法

```powershell
jnpm install -g @ms918/mrm-task-package
mrm @ms918/mrm-task-package
```

当执行的时候，会走下面步骤：

1. 判断当前路径下是否有`package.json`

   1. 有

      `package.json`没有的字段均设置成上面的默认值

   2. 无

      创建默认的`package.json`
