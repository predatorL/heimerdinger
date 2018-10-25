## 180717
- 官方教程[链接](https://electronjs.org/docs/tutorial/first-app)

## 入门
- Electron apps 使用JavaScript开发，其工作原理和方法与Node.js 开发相同。 electron模块包含了Electron提供的所有API和功能，引入方法和普通Node.js模块一样
```js
const electron = require('electron')
```
- electron 模块所提供的功能都是通过命名空间暴露出来的,  比如说
    * electron.app 负责管理Electron 应用程序的生命周期
    * electron.BrowserWindow 类负责创建窗口
        * 加载远程URL: win.loadURL('https://github.com')
        * 或加载本地HTML文件: win.loadURL(`file://${__dirname}/app/index.html`)

