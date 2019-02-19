const fs = require('fs');
const qs = require('qs');

let targetUrl = '/work_result/work_result_item';

const seleep = function(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('seleep', num);
            resolve();
        }, num);
    })
}

module.exports = async function (page, interRes) {
    let _url = interRes.url();
    if(_url.indexOf(targetUrl) !== -1) {
        let people = {};
        let reqObj = interRes.request();
        // 请求参数
        let postData = qs.parse(reqObj.postData());
        let result = await interRes.json();
        // 获取当前人物信息
        people = {
            ...result[0].wrp.people
        };

        await seleep(3000);

        await page.evaluate(sel => {
            console.log(sel, $)
            // const ulList = Array.from($(sel).find('ul li p a'));
            // const ctn = ulList.map(v => {
            //   return v.innerText.replace(/\s/g, '');
            // });
            // return ctn;
        }, '#work_result_tb tr');

        let _path = `${__dirname}/../data/${people.people_no}/`;
        // TODO 这样不太好 应该尝试判断是否存在
        try {
            fs.mkdirSync(_path);
        } catch (error) {
            console.error(_path + '目录存在');
        }
        let fileName = `${_path}/${postData.start.replace(/\-/g, '')}-${postData.end.replace(/\-/g, '')}.json`
        let writerStream = fs.createWriteStream(fileName);
        writerStream.write(JSON.stringify(result), 'UTF8');
        writerStream.end();
    }
}
