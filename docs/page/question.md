# 常见问题

# 解决IOS软键盘收回页面出现空白的情况

页面初始化时调用

``` js
    getKeyboard() {
        // IOS
        document.body.addEventListener('focusin', () => {
            // 软键盘弹出的事件处理
        })
        document.body.addEventListener('focusout', () => {
            // 软键盘收起的事件处理
            var currentPosition, timer
            var speed = 1// 页面滚动距离
            timer = setInterval(function() {
                currentPosition = document.documentElement.scrollTop || document.body.scrollTop
                currentPosition -= speed
                window.scrollTo(0, currentPosition)// 页面向上滚动
                currentPosition += speed // speed变量
                window.scrollTo(0, currentPosition)// 页面向下滚动
                clearInterval(timer)
            }, 1)
        })
    }
```