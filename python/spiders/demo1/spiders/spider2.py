import scrapy
class simpleUrl(scrapy.Spider):
    name = 'simpleUrl2'
    def start_requests(self):
        
        urls = [
            'http://lab.scrapyd.cn/page/3/',
            'http://lab.scrapyd.cn/page/2/'
        ]
        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse)
    def parse(self, response):
        page = response.url.split('/')[-2]
        filename = './html/test-%s.html' % page
        with open(filename, 'wb') as f:
            f.write(response.body)
        self.log('save file: %s' % filename)