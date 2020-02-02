
# 安装

组件地址： `https://github.com/xtaymydmyd/lxComponents/uploadImg`,可下载后加入到项目中；

# 配置项

- 图片裁剪工具
``` js 
"cropperjs": "1.4.3",
```

- npm 安装
``` 
npm install cropperjs@1.4.3
``` 

!> web端图片上传工具

# 代码示例
``` html
  <uploadImg 
    :size ="1048576" 
    :aspectRatio = 0.7
    :is-crop="true"
    :uploadUrl="hostUpload"
    @uploadChange="uploadChange">
    <div slot="content">
        图片上传
    </div>
</uploadImg>
``` 
``` js
import uploadImg from 'XXXXX/uploadImg.vue'
export default {
    data(){
        return {
            hostUpload : constGlobal.HostBook + 'uploadImg',
        }
    },
    components:{
        uploadImg
    },
    methods:{
        /**
         * 封面图片上传成功
        */
        uploadChange(data) {
            // 返回数据
        },
    }
}
``` 

# API

| 属性 | 说明 | 类型 | 默认值 |
| ------ | ------ | ------ | ------ |
| size | 限制图片上传大小(kB) | Number | 5242880(5M) |
| is-crop | 图片是否截剪 | Boolean | false |
| aspectRatio | 图片裁剪宽度比 | Number | 1 |
| uploadUrl | 上传图片地址 | String | 必填 |

# Events

| 事件名 | 说明 | 返回值 |
| ------ | ------ | ------ |
| uploadChange | 图片上传成功后的回调 | list |

# slot
| 名称 | 说明 |
| ------ | ------ |
| content | 图片上传插中内容的插槽 |

