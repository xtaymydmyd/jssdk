# 组件全局注册

### 全局注册缺省页组件

目录结构如下：
```text
-| defaultTip/
    -｜index.js
    -| index.vue
```

`index.vue`内容如平时开发一样写组件 ， `index.js`内容如下:
``` js

import DefaultTipComponent from './index.vue'

const DefaultTip = {
    install: function(Vue) {
        Vue.component('defaultTip', DefaultTipComponent)
    }
}

export default DefaultTip

```

全局引入：
```js
import defaultTip from 'components/defaultTip'
Vue.use(defaultTip)
```


