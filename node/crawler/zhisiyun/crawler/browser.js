/**
 * TODO: 密码登录太奇葩了 只能用二维码了
 * */
const puppeteer = require('puppeteer');
const browser = await(puppeteer.launch({
    //设置超时时间
    // timeout: 15000,
    //如果是访问https页面 此属性会忽略https错误
    // ignoreHTTPSErrors: true,
    // 打开开发者工具, 当此值为true时, headless总为false
    devtools: false,
    // 关闭headless模式, 不会打开浏览器
    headless: false,
    defaultViewport: {
        width: 1200,
        height: 800,
    }
}));

module.exports = browser;
