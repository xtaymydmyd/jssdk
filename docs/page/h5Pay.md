# h5支付

## App

1、在业务页打开`H5支付`页（外链），例如:

```js
var url = 'http://h5.lordar.com:8088/lechat/OutViewPayUser/OutViewPayUser.html#/?status=0&message=success&clientType=WXQY&mchId=552cbe3c1adf442a84fd5975cade7f9e&goodsId=78f0c080e1ee4462909ea595fd74f00f&goodsName=医院缴费&outOrderNo=abcdefg123455&totalFee=1&feeType=&account=xuwenxia&openId=o2cFGsxr7ypbd0G67A3JO4SKVz9k&redirectUrl=http%3A%2F%2Fpay.lordar.com%3A18096%2Fyiliao'
window.location.href = url;
```

+ 在当前webView打开`H5支付`页，跳方式为`Navigated to`,即 保留当前页，跳转到指定页，这里的指定页就是布置在服务器上的`H5支付`页；

+ 当打开`H5支付`页后，点击`支付`按钮创建订单里，后台会返回一个链接，例如 ： 
```url
https://wx.tenpay.com/cgi-bin/mmpayweb-bin/checkmweb?prepay_id=wx11163932645210cc9e2ff5601690143000&package=376841815"
```

+ 在`H5支付`页中创建一个iframe标签元素，默认不显示，`url`即上述返回的链接，例如 ： 
``` html
 <iframe 
    :src="url" 
    sandbox="allow-scripts allow-top-navigation allow-same-origin" 
    style="display:none;"></iframe>
```

+ 当赋值时，隐藏的iframe会打开链接，由这个链接乎起微信支付，支付成功后返回，会自动刷新页面；


## CORDOVA配置
    需要在`cordova`项目中`config.xml`中增加网址白名单，即：

    ``` config.xml
    <allow-intent href="weixin:*" />
    <allow-intent href="alipays:*" />
    ```

    
!> `allow-navigation` 与 `allow-intent`的区别 : https://www.w3cschool.cn/cordova/cordova_whitelist.html




