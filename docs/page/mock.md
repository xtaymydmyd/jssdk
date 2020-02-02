# mock 配置与使用

### 安装
``` npm
npm install mockjs@1.0.1-beta3
```

### 文件配置
1、package.json文件,修改环境变量

在 `webpack` 打包的项目项目中，可以安装 `cross-env` (跨Win/Linux平台设置 process.env值) 插件，在 `package.json` 文件中设置不同的运行脚本，增加 `"dev:mock"`： 

``` json
script : {
    "dll": "webpack --config build/webpack.dll.conf.js",
    "dev": "node --max_old_space_size=4096 build/dev-server.js",
    "dev:mock": "cross-env NODE_ENV=\"mock\" node --max_old_space_size=4096 build/dev-server.js",
    "prod:app": "cross-env PROD_ENV=\"app\" node build/build.js",
    "prod:wechat": "cross-env PROD_ENV=\"wechat\" node build/build.js"
}

```

2、修改 `build/webpack.base.conf.js`
``` js
var env = process.env.NODE_ENV == 'mock' ? require('../config/mock.dev.env') : config.dev.env
```

3、修改 `build/webpack.dev.conf.js` 中 `new webpack.DefinePlugin()`
``` js
...
var env = process.env.NODE_ENV == 'mock' ? require('../config/mock.dev.env') : config.dev.env

module.exports = merge(baseWebpackConfig, {
    module: {
        rules: utils.styleLoaders({
            sourceMap: config.dev.cssSourceMap
        })
    },
    devtool: '#source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': env 
        }),
        new webpack.HotModuleReplacementPlugin(),
...

```
4、mock模式下运行项目：
``` bash
npm run dev:mock
```

### 在src/assets目录下新建 mock目录，结构如下：
``` 目录
-| src/
    -| assets/
        -| mock
            -| index.js
            -| base.js
```

### mock使用
1、在 `config.js` 中引入 `mock/index.js`
 
```js
import 'assets/mock'
```

2、`mock/index.js`内容如下：

```js
import Mock from 'mockjs'
import baseAPI from './base.js'

// 修复在使用 MockJS 情况下，设置 withCredentials = true，且未被拦截的跨域请求丢失 Cookies 的问题
// https://github.com/nuysoft/Mock/issues/300
if (process.env.NODE_ENV == 'mock') {
    Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
    Mock.XHR.prototype.send = function() {
        if (this.custom.xhr) {
            this.custom.xhr.withCredentials = this.withCredentials || false
        }
        this.proxy_send(...arguments)
    }
    /**
     * 获取模板数据
    */
    Mock.mock(/\/search\/getComponents/, 'get', baseAPI.getComponents)
}

export default Mock

```

3、`mock/base.js`内容如下：

```js
export default {
    getComponents: config => {
        var data = '...返回的数据...'

        return data
    }
}
```


