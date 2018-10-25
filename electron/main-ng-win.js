const {app, BrowserWindow} = require('electron');

function createWindow() {
    // 创建浏览器窗体
    win = new BrowserWindow({width: 800, height: 600});

    // 加载应用的index.html
    win.loadURL('http://localhost:4200/')
}

app.on('ready', createWindow);
