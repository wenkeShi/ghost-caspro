caspro主题简洁美观，采用响应式设计，能很好的适配不同设备。
# 1. 必要条件
- ghost博客1.x
# 2.预览
[demo](http://xinwenke.top)
> 首页

![home.png](http://upload-images.jianshu.io/upload_images/7234109-62bfe9e047dbd703.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

> blog文章主页

![blog.png](http://upload-images.jianshu.io/upload_images/7234109-dd8590ca5c92f139.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

> 文章page

![page1.png](http://upload-images.jianshu.io/upload_images/7234109-2a61d4057c96cade.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![page2.png](http://upload-images.jianshu.io/upload_images/7234109-426819f9b665fe14.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![page3.png](http://upload-images.jianshu.io/upload_images/7234109-d4a96bf956960fc2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


# 3.正常运行主题的步骤

- [下载](https://github.com/wenkeShi/ghost-caspro)主题zip压缩包之后，登录ghost博客后台，在Design栏中，上传caspro主题压缩包，active。
- 在Team栏找到自己的账号，查看对应的链接
- 在Design栏，Navigation设置导航，例添加blog导航对应的URL就为你账号的链接，一般为 http://host/author/youname
- 可添加其他导航项，设置为想要跳转的URL
- 如果想要跳转到自定义的页面，需要在后台添加两篇能作为单独页面的文章。设置导航URL分别为两篇文章的URL
- 创建 page-URL.hbs 模板文件，这个文件即是自定义页面的模板文件。如：我在后台添加了单独页面的文章，设置其URL为http://localhost/travelib,则需要创建page-travelib.hbs文件，然后在导航栏添加travelib一项，设置其链接为http://localhost/travelib。这样点击导航项即可跳转到page-travelib.hbs模板生成的页面。

下面是参考：
1.作为单独页面的文章
![image.png](http://upload-images.jianshu.io/upload_images/7234109-5fb536df92ffdcca.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

2.文章的链接
![image.png](http://upload-images.jianshu.io/upload_images/7234109-980494dc6f2c57cf.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

3.设置导航栏
![nav.png](http://upload-images.jianshu.io/upload_images/7234109-152c2af99205cf49.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

4.创建hbs模板文件
![image.png](http://upload-images.jianshu.io/upload_images/7234109-e7ce50457305f4cd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



[demo](http://xinwenke.top)
