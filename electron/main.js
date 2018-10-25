const {app, BrowserWindow} = require('electron');

function createWindow() {
    // 创建浏览器窗体
    win = new BrowserWindow({width: 800, height: 600});
    // 加载应用的index.html
    win.loadFile('./template/index.html');

    win2 = new BrowserWindow({width: 800, height: 600});
    // 加载应用的index.html
    win2.loadURL('https://github.com')
}

app.on('ready', createWindow);
