#  
# 路由配置

新建项目后（项目名为lechat），在router下新建index.js

!> 每个项目必备 `默认路由`和 `报错路由`

## 路由配置参数
```js
/**
 * 项目中的路由中meta除了原生参数外可配置的参数:
 * meta: {
 *      title: { String|Number|Function }
 *          显示在侧边栏、面包屑和标签栏的文字
 *          使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *          可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *      hideInBread: (false) 设为true后此级路由将不会出现在面包屑中
 *      hideInTagNav: (false) 设为true后此级路由将不出出现在标签页中，
 *      keepAlive: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 *      icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 * }
 */
```

##  默认路由

路由指向 `_c/views/welcome/`目录下：

```js
 {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main, 
    meta: {
        hideInMenu: true,
        notCache: true
    },
    children: [
        {
            path: '/home',
            name: 'home',
            meta: {
                hideInMenu: true,
                title: '首页',
                notCache: true,
                icon: 'home'
            },
            component: () => import('_c/views/welcome/welcome.vue')
        }
    ]
},
```

## 业务页面路由

路由指向 `pages` 目录下：

```js
{
    path: '/authManage',
    name: 'authManage',
    redirect: '/authManage/rolePrivilege',
    meta: {
        icon: 'md-key',
        title: '权限管理'
    },
    component: Main,
    children: [
        {
            path: 'rolePrivilege',
            name: 'rolePrivilege',
            meta: {
                icon: 'ios-grid',
                title: '角色管理'
            },
            component: () => import('@/apps/lechatSystem/pages/privilege/rolePrivilege.vue')
        },
        {
            path: 'accountManage',
            name: 'accountManage',
            meta: {
                icon: 'ios-grid',
                title: '账号管理'
            },
            component: () => import('@/apps/lechatSystem/pages/privilege/accountManage.vue')
        }
    ]
}
```


## 出错提示路由 

路由指向`_c/views/error-page`目录下：

```js
{
    path: '/401',
    name: 'error_401',
    meta: {
        hideInMenu: true
    },
    component: () => import('@/components/views/error-page/401.vue')
}, {
    path: '/500',
    name: 'error_500',
    meta: {
        hideInMenu: true
    },
    component: () => import('@/components/views/error-page/500.vue')
}, {
    path: '*',
    name: 'error_404',
    meta: {
        hideInMenu: true
    },
    component: () => import('@/components/views/error-page/404.vue')
}
```
## 内嵌外链

路由指向`_c/views/frame`目录下：

数据库配置如下 ： uri  : `项目名.html#/frame?url=http://www.baidu.com&title=百度`

```js
{
    path: '/',
    name: '_frame',
    redirect: '/frame',
    component: Main,
    meta: {
        hideInMenu: true,
        notCache: true,
        hideInTagNav: true,
        icon: 'md-cube'
    },
    children: [
        {
            path: '/frame',
            name: 'frame',
            meta: {
                hideInMenu: true,
                title: '',
                icon: 'md-cube'
            },
            component: () => import('_c/Views/frame/index.vue')
        }
    ]
}
```

# 语言（locale）
模板架中使用`languge`组件来切换语言,在 `@/assets/locale`中配置语言显示的内容，目录包括:
``` bash
-| lang
    -| en-Us.js
    -| zh-CN.js
    -| zh-TW.js
```

项目中也需要配置语言内容，例如`lechat/locale`目录包括:
```bash
-| locale
    -| lang
        -| en-Us.js
        -| zh-CN.js
        -| zh-TW.js
    -| index.js
```
!> 项目中的`locale/index.js`中一段内容需求动态修改

例如以下代码中的lechat便是项目名，不同的项目有不同的项目名，不同的项目下的`locale/index.js`下的内容需要手动修改：

```js
...
import customZhCn from 'lechat/locale/lang/zh-CN'
import customZhTw from 'lechat/locale/lang/zh-TW'
import customEnUs from 'lechat/locale/lang/en-US'
...

```

# 配置文件（config.js）

文件指向 `@/config/index.js`,分别有几项配置:

- frontName   : 项目名称 - 用于获取配置文件，例如 `njust` ;
- version     : 框架版本号;
- title       : 项目默认名称;
- mode        : 模块模式；
mode = 1 表示左侧菜单是根据登录人员权限获取的菜单显示，不需要根据模块选择；mode = 2 表示左侧菜单根据模块展示；
- useI18n     : 是否使用国际化，默认为false





