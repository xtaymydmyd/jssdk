# 框架目录 - 解析

lechat-iview-admin目录结构如下：

```text
-| build/
-| config/
-| src/
    -｜ apps/
    -| assets/
    -| components
    -| config
    -| template
-| static/
-| package.json
-| .babelrc
-| .eslintignore
```

# 启动多个项目
框架已将配置项配置完成，需修改`config/index.js`文件中的`pageEnters`字段内容 ，具体配置规则见[启动多个项目](page/config)

# 定制模板
为了设置管理端模板， 需要引入`template`,即在项目route中设置`Main`,也可以自定义模板，将自定的模板放在template目录下编辑引用

!> 模板统一在`templte`目录下

# router
路由如果是按需加载的情况，打包会在`dist`目录下出现 `【id】【hash】.js`文件，按需加载一个路由，打包后就会出现一个文件