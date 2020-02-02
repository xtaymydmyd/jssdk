#  
# 快速开始

依赖以下 `UI` 组件库 
 
```bash
    "iview": "3.2.2",
    "element-ui": "2.5.4",
```
其他 `UI` 组件

```bash
    "muse-ui": "2.1.0",
```   

此外，还包括其他插件 `(package.json)`，例如:

```bash 
    "codemirror": "5.38.0",
    "countup": "1.8.2",
    "cropperjs": "1.4.3",
    "echarts": "3.8.5",
    "vue-dplayer": "0.0.10",
    "vuedraggable": "2.16.0",
    ...
```

# 目录结构

```text
    -| build/
    -| config
    -| src
        -| apps
            -| start
        -| assets
        -| components
        -| config
    -| static
    -| package.json
```
如果需要创建多个项目，需要在apps下创建新项目目录,例如项目名为lechat,目录结构如下：
```text
    lechat
        -| assets
            -| img
            -| js
        -| components
        -| filter
        -| locale
            -| lang
            -| index.js
        -| page
        -| router
        -| store
        -| App.vue
        -| index.art
        -| main.js
```

# 引用语法

在`js` 和 `css`中引用文件可用：
```text
    _c              =>  src/components
    @               =>  src
```

在`css`中引用文件可用：
```text
    _c              =>  src/components
    @               =>  src
    ~/assets        =>  src/assets
```




