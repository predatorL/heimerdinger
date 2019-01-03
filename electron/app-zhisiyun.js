const {app, BrowserWindow} = require('electron');

const win = null;

function createWindow() {
    // 创建浏览器窗体
    win = new BrowserWindow({width: 800, height: 600});

    // 加载应用的index.html
    win.loadURL('https://www.zhisiyun.com/work_wx_qrcode/')
}

app.on('ready', createWindow);
