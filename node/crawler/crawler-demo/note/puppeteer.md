### 知识点
* puppeteer.launch 启动浏览器实例
* browser.newPage() 创建一个新页面
* page.goto 进入指定网页
* page.screenshot 截图
* page.type 获取输入框焦点并输入文字
* page.keyboard.press 模拟键盘按下某个按键，目前mac上组合键无效为已知bug
* page.waitFor 页面等待，可以是时间、某个元素、某个函数
* page.frames() 获取当前页面所有的 iframe，然后根据 iframe 的名字精确获取某个想要的 iframe
* iframe.$('.srchsongst') 获取 iframe 中的某个元素
* iframe.evaluate() 在浏览器中执行函数，相当于在控制台中执行函数，返回一个 Promise
* Array.from 将类数组对象转化为对象
* page.click() 点击一个元素
* iframe.$eval() 相当于在 iframe 中运行
* document.queryselector 获取指定元素，并将其作为第一个参数传递
* iframe.$$eval 相当于在 iframe 中运行
* document.querySelectorAll 获取指定元素数组，并将其作为第一个参数传递
* page.waitForNavigation  此方法在页面跳转到一个新地址或重新加载时解析，如果你的代码会间接引起页面跳转，这个方法比较有用

## 知识点2
* page.$$eval
    - pageFunction中的console.log之类的信息都是在页面控制台中输出的，而不是在终端
    - pageFunction中能拿到真实页面的上下文，比如jQuery之类的
*  page.waitForXXX 系列 好好利用下，至少比page.on要好一些，同步
    - page.waitForResponse(urlOrPredicate[, options])
