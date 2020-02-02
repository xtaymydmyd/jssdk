# 路由配置说明

``` js
{
    redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
    name:'router-name'             the name is used by <keep-alive> (must set!!!)
    meta : {
        title: 'title'               the name show in sidebar and breadcrumb (recommend set)
        icon: 'svg-name'             the icon show in the sidebar
        noCache: true                if set true, the page will no be cached(default is false)
        affix: true                  if set true, the tag will affix in the tags-view
        breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
        activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
    }
}

```