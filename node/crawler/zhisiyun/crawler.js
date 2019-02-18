/**
 * TODO: 密码登录太奇葩了 只能用二维码了
 * */
const puppeteer = require('puppeteer');



(async () => {
    const toDo = async function () {
        console.log('Page loaded!');
        count ++;
        if(count === 2) {
            await page.goto('https://www.zhisiyun.com/admin/tm/cardrecord/hr_list_v2');
        }
    }
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
    let count = 0;
    page.on('load', toDo);
    await page.goto('https://www.zhisiyun.com/work_wx_qrcode/');
    // await page.waitFor(30000);
    // await page.screenshot({
    //     path: __dirname + '/images/portal_v2.png',
    //     type: 'png',
    //     fullPage: true,
    // });
    // browser.close();
})();
