# 安装

组件地址： `https://github.com/xtaymydmyd/lxComponents/uploadFile`,可下载后加入到项目中；

!> web端图片上传工具

# 代码示例
``` html
<uploadFile 
    :size ="5242880"
    :uploadUrl="fileUpload"
    :accept="accept"
    @uploadChange="fileUploadChange"
    @startUpload="startUploadFile">
    <div slot="content" class="flex flex-align-items flex-justify-content uploadFileBtn">
        <Icon type="ios-cloud-upload-outline"></Icon>
        <div class="uploadFileText" v-show="!uploadFileLoading">上传文件</div>
        <div class="uploadFileText" v-show="uploadFileLoading">上传中...</div>
    </div>
</uploadFile>
``` 
``` js
import uploadFile from 'XXXXX/uploadFile.vue'
export default {
    data(){
        return {
            accept : ['epub'],
            fileUpload : constGlobal.HostBook + 'upload',
        }
    },
    components:{
        uploadFile
    },
    methods:{
        /**
         * 文件上传成功
        */
        fileUploadChange(data) {
            // data 返回数据
        },
        /**
         * 文件开始上传成功
        */
        startUploadFile() {
            // 开始上传
        },
    }
}
``` 


# API

| 属性 | 说明 | 类型 | 默认值 |
| ------ | ------ | ------ | ------ |
| size | 限制图片上传大小(kB) | Number | 5242880(5M) |
| uploadUrl | 上传图片地址 | String | 必填 |
| accept | 限制上传文件的格式 | Array | 必填 , 例  ： ['epub'] |

# Events

| 事件名 | 说明 | 返回值 |
| ------ | ------ | ------ |
| uploadChange | 文件上传成功后的回调 | list |
| startUpload | 文件开始上传 | 无返回值 |

# slot
| 名称 | 说明 |
| ------ | ------ |
| content | 文件上传插中内容的插槽 |