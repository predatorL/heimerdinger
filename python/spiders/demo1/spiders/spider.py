import scrapy

class mingyan(scrapy.Spider):

    name = 'mingyan3'

    def start_requests(self):
        
        urls = [
            'http://lab.scrapyd.cn/page/3/',
            'http://lab.scrapyd.cn/page/2/'
        ]
        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse)
    
    def parse(self, response):
        
        page = response.url.split('/')[-2]
        filename = './html/mingyan-%s.html' % page
        
        with open(filename, 'wb') as f:
            f.write(response.body)
        
        self.log('savefile: %s' % filename)