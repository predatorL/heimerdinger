const puppeteer = require('puppeteer');
(async () => {
    const browser = await(puppeteer.launch({
        //设置超时时间
        timeout: 15000,
        //如果是访问https页面 此属性会忽略https错误
        ignoreHTTPSErrors: true,
        // 打开开发者工具, 当此值为true时, headless总为false
        devtools: false,
        // 关闭headless模式, 不会打开浏览器
        headless: true
    }));
    const page = await browser.newPage();
    await page.goto('https://www.jianshu.com/u/40909ea33e50');
    await page.screenshot({
        path: __dirname + '/images/jianshu.png',
        type: 'png',
        fullPage: true,
    });
    browser.close();
})();
