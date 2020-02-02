# 小程序注意事项

## mpvue的生命周期

``` mpvue
created() {
    console.log('page index created', this)
  },
  mounted() {
    console.log('mounted', this)
  },
  onLoad() {
    console.log('page index onLoad', this)
  },
  onReady () {
    console.log('page index onReady', this)
  },
  onShow() {
    console.log('onShow', this)
  },
  onUnload() {
    console.log('onUnload', this)
  },
  onHide() {
    console.log('onHide', this)
  },
```

完成后，重新编译小程序，控制台打印的日志如下图，分析可以看出以下结论:

1、vue的created函数先于小程序onLoad函数调用

2、一个页面对应一个vue实例,app也对应一个vue实例（打印出的this）

3、在小程序的第一页出现前，已经创建出了所有页面对应的Vue实例。看下图可以看出，在index页面的onLoad触发前，page counter，logs的created函数已经触发。

4、mounted会在onReady之后触发，这个钩子适用于当页面出现时执行一些过渡效果的情况。