/**
 * TODO: 太奇葩了 这个登录是什么鬼
 * */
const puppeteer = require('puppeteer');
const accountConf = require('./local_config.json');
(async () => {
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
    const page = await browser.newPage();
    await page.goto('https://www.zhisiyun.com/portal_v2/#');
    //  点击系统登录
    await page.click('.sign_in');
    // 输入密码
    // await page.waitFor(3000);
    await page.type('.sign_view.sign_view_next .company input[name="client"]', accountConf.company, {delay: 80});
    await page.type('.sign_view.sign_view_next .company input[name="username"]', accountConf.account, {delay: 80});
    await page.type('.sign_view.sign_view_next .company input[name="password"]', accountConf.pwd, {delay: 80});
    await page.focus('.sign_view.sign_view_next .company input[name="password"]');
    await page.waitFor(2000);
    // 点击登录
    await page.click('.sign_view.sign_view_next .submit_btn');
    // await page.waitFor(2000);
    // 等待页面加载出来，等同于window.onload
    await page.waitForNavigation({
        waitUntil: 'load'
    });
    await page.goto('https://www.zhisiyun.com/admin/tm/cardrecord/hr_list_v2');

    // await page.waitFor(30000);
    // await page.goto('https://www.zhisiyun.com/admin/tm/cardrecord/hr_list_v2');
    // await page.screenshot({
    //     path: __dirname + '/images/portal_v2.png',
    //     type: 'png',
    //     fullPage: true,
    // });
    // browser.close();
})();
