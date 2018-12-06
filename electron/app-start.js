const {app, BrowserWindow} = require('electron');
const path = require('path');
var args = process.argv.splice(2);
console.log(args);


function createWindow() {
    // 创建浏览器窗体
    win = new BrowserWindow({width: 800, height: 600});
    // 加载应用的index.html
    win.loadFile(path.join(__dirname, './template/index.html'));
}

app.on('ready', createWindow);
