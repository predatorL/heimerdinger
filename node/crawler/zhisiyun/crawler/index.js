/**
 * TODO: 密码登录太奇葩了 只能用二维码了
 * */
const puppeteer = require('puppeteer');
const fs = require('fs');
const qs = require('qs');
// const resHandle = require('./resHandle');

let targetUrl = '/work_result/work_result_item';

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

    page.on('response', async (res) => {
        // 屏蔽无关的响应
        if(res.url().indexOf(targetUrl) == -1) {
            return;
        }
        console.log(targetUrl)
        let reqObj = res.request();
        // 请求参数
        let postData = qs.parse(reqObj.postData());
        // 响应的body
        let result = await res.json();
        // 当前人物信息
        let people = {
            ...result[0].wrp.people
        };
        // 存储地址
        let _path = `${__dirname}/data/${people.people_no}/`;
        // 等待两秒让页面加载数据
        await page.waitFor(2000);
        const pageData = await page.$$eval('#work_result_tb tr', (trs) => {
            let arr = [];
            $(trs).each(function(){
                arr.push({
                    date: $(this).find('td:nth-child(1)').text(),
                    end_time: $(this).find('td.sign_out').text().replace('\n', ''),
                    start_time: $(this).find('td:nth-child(5)').text().replace('\n', ''),
                    label: $(this).find('td:nth-child(2)').text()
                })
            });
            return arr;
        })
        await page.goto('file:///Users/yc/workplace/room/heimerdinger/node/crawler/zhisiyun/template/table.html');
        await page.waitFor(2000);
        let billData = pageData.filter(item => {
            // 六日加班
            if(['六', '日'].indexOf(item.label) !== -1 && item.start_time.trim() !== '') {
                return true;
            }
            // 晚上没打卡
            if(item.end_time === '') {
                return false;
            }
            return item.end_time.trim().split('.')[0]*1 > 21;
        })
        // .map(item => {

        // });
        await page.$$eval('body', (trs) => {
            vm.person = {
                name: 2222
            }
            vm.date = {
                start: 1111,
                end: 2222,
            }
            vm.bill = {
                total: 360,
                detail: []
            }
        })
        console.log('waitFor $$eval', pageData)

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
