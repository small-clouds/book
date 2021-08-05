# 学习时间 2021/7/19 16:19
import requests
import re
import bs4
import os

headers = {
     'user - agent': 'Mozilla / 5.0(WindowsNT10.0;Win64;x64) AppleWebKit / 537.36(KHTML, likeGecko) Chrome / 80.0.3987.116Safari / 537.36'
}

#创建文件夹
if not os.path.exists('D:/爬取图库'):
    os.mkdir('D:/爬取图库')

def get_first_url(url):       #得到第一个url，即每一篇文章的url，结果是未遍历的
    res_1=requests.get(url=url,headers=headers)
    html_1=res_1.text
    first_url=re.findall('<li.*?<a.*?"(//w.*?search)"',html_1,re.S)
    return first_url

def get_second_url(url):   #得到第二个url，即文章中每个图片的url，结果是未遍历的
    res_2 = requests.get(url=url,headers=headers)
    html_2=res_2.text
    soup=bs4.BeautifulSoup(html_2,'html.parser')
    picture_list = soup.select('.img-box img')
    return picture_list

def download_picture(url,num1,i):   #下载图片
    res_3=requests.get(url=url,headers=headers)
    picture_data=res_3.content
    picture_name='img{}_{}.jpg'.format(num1,i)
    picture_path='D:/爬取图库/'+picture_name
    with open(picture_path,'wb') as f:
        f.write(picture_data)
        print(picture_path,'打印成功')


def main():
    base_url='https://search.bilibili.com/article?keyword=%E5%AE%9E%E7%94%A8%E5%B0%8F%E8%A1%A8%E6%83%85%E5%8C%85%E5%90%88%E9%9B%86&from_source=web_search'
    fist_urls=get_first_url(base_url)
    num1=1
    for first_url in fist_urls:
        first_url='https:'+first_url
        second_url=get_second_url(first_url)
        for i in range(len(second_url)):
            picture_urls=second_url[i].get('data-src')
            picture_url='https:'+picture_urls
            download_picture(picture_url,num1,i)
        num1+=1


if __name__ =='__main__'    :
    main()
