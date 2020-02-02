# app 版本更新（含热更新）

## 配置项 - cordova

1、热更新文档地址 ： `https://github.com/nordnet/cordova-hot-code-push/wiki`

``` 热更新
cordova plugin add https://github.com/maobole/cordova-hot-code-push.git
``` 

2、获取开发软件的版本号

``` 版本号
cordova-plugin-app-version@0.1.9
``` 

3、vux
``` 版本号
"vux": "2.9.2"
```

4、host
``` host
HostVersion : main + ''
```

## 步骤

将文件`updateCommon.js`放在路径为`assets/js`目录下

在主项目，例如项目名为portal下`App.vue`的引入`updateCommon.js`

``` js
import updateCommon from 'assets/js/updateCommon'
``` 

在App.vue中加入如下代码
``` js
export default {
    mounted:function () {
        if(constGlobal.isAndroid() || constGlobal.isIOS()){
            document.addEventListener("deviceready", this.onDeviceReady, false);
            document.addEventListener("resume", this.onResume, false);
        }else{
            this.onResume();
        }
    },
    methods:{
        onDeviceReady(){
            var _this = this;
            this.onResume();
        },
        /**
         * 版本号更新
         **/
        onResume(){
            var version = constGlobal.currentVersion;
            updateCommon.checkVersion(version);
        },
    }
}
``` 
以上代码功能是当App启动或将App唤醒时，判断App是否需要升级



