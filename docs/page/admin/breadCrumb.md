# 面包屑设置说明

路由部分代码如下：

``` js
{
    path: '/payCenter',
    name: 'payCenter',
    redirect: '/payCenter/checkinfo',
    meta: {
        icon: 'md-flash',
        title: '支付中心'
    },
    component: Main,
    children: [
        {
            path: 'checkinfo',
            name: 'checkinfo',
            meta: {
                icon: 'ios-grid',
                title: '对账信息'
            },
            component: () => import('@/apps/lxVcardSystem/pages/paycenter/checkInfo.vue')
        },
        {
            path: 'tradingrecord',
            name: 'tradingrecord',
            meta: {
                icon: 'ios-grid',
                title: '交易记录'
            },
            component: () => import('@/apps/lxVcardSystem/pages/paycenter/newTradingrecord.vue')
        },
        {
            path: 'unevenbills',
            name: 'unevenbills',
            meta: {
                icon: 'ios-grid',
                title: '不平账单'
            },
            component: () => import('@/apps/lxVcardSystem/pages/paycenter/unevenbills')
        }
    ]
}
```
当访问路由为 `lxVcardSystem.html#/payCenter/tradingrecord` , 显示的面包屑内容为: `支付中心/交易记录`

### 方式一（修改最后一个面包屑的内容）：
``` js
this.$nextTick(function() {
    window.eventHub.$emit("changePath", '新交易记录');
})
```

结果： `支付中心/新交易记录`

### 方式二（修改面包屑（全部））：

``` js
this.$nextTick(function() {
    window.eventHub.$emit("changeCustomBreadCrumb", [{
        name : 'checkinfo', // 路由定义的name
        title : '对账信息', // 面包屑显示的标题
        icon : 'ios-grid' // iview的icon名称
    },{
        name : 'tradingrecord', // 路由定义的name
        title : '交易记录', // 面包屑显示的标题
        icon : 'ios-grid' // iview的icon名称
    }]);
})
```
结果： `对账信息/交易记录`