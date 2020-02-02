# 版本
version : "4.0.0"

# 插件

## cordova-plugin-le

1、svn地址
``` svn
http://w.lechat.io:8307/lechat-platform/code/back/appMgr/cordova-plugin/cordova-plugin-ld
```

2、安装命令
``` cordova
cordova plugin add cordova-plugin-ld --variable APIENTRANCE=http://api.njust.lordar.com
```

## cordova-plugin-app-version
用来的获取版本号
``` cordova
cordova plugin add cordova-plugin-app-version@0.1.9
```



## jpush-phonegap-plugin
``` cordova
cordova plugin remove cordova-plugin-jcore
cordova plugin remove jpush-phonegap-plugin
cordova plugin add cordova-plugin-jcore@1.1.12
cordova plugin add jpush-phonegap-plugin@3.3.2 --variable APP_KEY=126285990791ec71c3d81e71
```



## 增加白名单 config.js
``` config
<allow-intent href="weixin:*" />
<allow-intent href="alipays:*" />
```

## xcode 配置 schema
weixinPay  : pay.lordar.com
