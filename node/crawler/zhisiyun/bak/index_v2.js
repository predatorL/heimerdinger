/**
 * TODO: 密码登录太奇葩了 只能用二维码了
 * */
const puppeteer = require('puppeteer');
const fs = require('fs');
const qs = require('qs');

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

    page.on('response', async function (interRes) {
        let _url = interRes.url();// /work_result/work_result_item
        if(_url.indexOf('/work_result/work_result_item') !== -1) {
            let people = {};
            let reqObj = interRes.request();
            console.log('postData()', reqObj.postData(), qs.parse(reqObj.postData()))
            let result = await interRes.json();
            people = {
                ...result[0].wrp.people
            };
            result = result.map(item => {
                delete item.wrp.people;
                return item;
            })
            let _path = `${__dirname}/../data/${people.people_no}/`;
            // TODO 这样不太好 应该尝试判断是否存在
            try {
                fs.mkdirSync(_path);
            } catch (error) {
            }
            let writerStream = fs.createWriteStream(`${_path}/111.json`);
            writerStream.write(JSON.stringify(result), 'UTF8');
            writerStream.end();
        }
    });

    await page.goto('https://www.zhisiyun.com/work_wx_qrcode/');
    // await page.waitFor(30000);
    // await page.screenshot({
    //     path: __dirname + '/images/portal_v2.png',
    //     type: 'png',
    //     fullPage: true,
    // });
    // browser.close();
})();
