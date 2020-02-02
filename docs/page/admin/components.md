#  

# 图片上传

组件 : `@/components/custom/uploadImg`


``` js
//引用
import uploadImg from '_c/custom/uploadImg/uploadImg.vue

export default {
    components:{
        // 组件声明
        uploadImg
    },
    methods:{
        //获取图片
        uploadChangeEvent(imgobj){
           this.imgid = imgobj[0];
        },
        //获取图片名称
        uploadNameEvent(imgName){
            this.imgName = imgName[0]
        }
    }
}
```

``` html
<upload-img 
    :num=1 
    :aspectRatio=1
    :minCropBoxWidth=100
    :is-crop="true"
    v-on:uploadChange ="uploadChangeEvent" 
    v-on:uploadName ="uploadNameEvent">
    <div slot="content" >
        <Icon type="camera" style="font-size:18px;"></Icon>
    </div>
</upload-img>
```

参数： 

| 属性 | 说明 | 类型 | 默认值 |
| ------ | ------ | ------ | ------ |
| isCrop | 选择图片后是否裁剪 | Boolean | false |
| minCropBoxWidth | 裁剪框的最小宽度 | Number | 100 |
| aspectRatio | 裁剪框比例 | Number | 1 |
| num | 图片上传张数 | Number | 1 |


# 文件上传

组件 : `@/components/custom/uploadFile`


``` js
//引用
import uploadFile from '_c/custom/uploadFile/uploadFile.vue'

export default {
    data(){
        return {
            fileUpload : constGlobal.HostAppManagement + 'uploadZip',
        }
    }
    components:{
        // 组件声明
        uploadFile
    },
    methods:{
        //文件上传成功
        appFileUpload(info){
            console.log(info)
        },
        //文件开始上传
        startUploadFile(){

        }
    }
}
```

``` html
<uploadFile 
    :size ="5242880"
    :uploadUrl="fileUpload"
    :accept="accept"
    @uploadChange="appFileUpload"
    @startUpload="startUploadFile">
    <div slot="content" >
        <Icon type="ios-cloud-upload-outline"></Icon>
    </div>
</uploadFile>
```

参数： 

| 属性 | 说明 | 类型 | 默认值 |
| ------ | ------ | ------ | ------ |
| accept | 上传文件类型,例如zip、rar | Array | [] |
| uploadUrl | 上传url | String | constGlobal.HostDefaultImgUpload(全局配置参数) |
| size | 上传文件大小 | Number | 5242880（5M） |
| uploadKey | 其他需要图片上传成功后回调的其他数据（异步上传） | String |   |


# 选择功能

## 选择部门、人员和群组

组件指向`@/components/custom/select/selectModel.vue`

``` js
//引用
import selectModel from '_c/custom/select/selectModel.vue'

export default {
    data(){
        return {
             manageConfig : {
                rootNodeId : '320662230000',
                rootNodeType : '',
                title : '选择人员',
                type : 1,//0:可选部门、岗位、群组和搜索人员 1：只选择人员 ，选择部门显示部门内所有人员
                condition : ['depart' ,'group'],
                muliteChoice : 1,//是否多选人员 1 ：多选  2：单选
            },
        }
    }
    components:{
        // 组件声明
        selectModel
    },
    methods:{
        //确定
        submitManage(info){
            console.log(info)
        },
        //取消
        cancelManage(){

        }
    }
}
```

``` html
<select-model 
    ref="selectModelManageRef" 
    :config="manageConfig"
    @submitRangeList="submitManage"
    @cancelRangeList="cancelManage"></select-model>
```

参数： 

| 属性 | 说明 | 类型 | 默认值 |
| ------ | ------ | ------ | ------ |
| config | 配置文件 | Object | {} |

config参数：

| 属性 | 说明 | 类型 | 默认值 |
| ------ | ------ | ------ | ------ |
| rootNodeId    | 筛选组织结构的根节点                                               | String | 不能为空 |
| rootNodeType  | 筛选组织结构的根节点的节点类型                                       | String | 不能为空 |
| title         | 组件的弹出框标题                                                   | String | '选择人员' |
| muliteChoice  | 单选还是多选                                                      | String | '选择人员' |
| type          | 0:可选部门、岗位、群组和搜索人员 1：只选择人员 ，选择部门显示部门内所有人员 | String | 0 |
| condition     | 选择部门或群组，分别为'depart' ,'group'                             | Array | ['depart' ,'group'] |



## 选择部门 (单选 || 多选)

组件指向`@/components/custom/select/selectDepartOfPrivateModel.vue`

``` js
//引用
import selectModel from '_c/custom/select/selectModel.vue'

export default {
    data(){
        return {
            config : {
                rootNodeId : '1',
                rootNodeType : '0',
                title : '选择人员',
                type : 2,//0:可选部门、岗位、群组和搜索人员 1：只选择人员 ，选择部门显示部门内所有人员 2：选择人员，选择群组及群组下的人
                condition : ['depart' ,'group'],
                muliteChoice : 1,//是否多选人员 1 ：多选  2：单选
                limit : false //是否限制权限
            },
        }
    }
    components:{
        // 组件声明
        selectDepartOfPrivateModel
    },
    methods:{
        //确定
        submitRangeList(info){
            console.log(info)
        },
        //取消
        cancelRangeList(){

        }
    }
}
```

``` html
<selectDepartOfPrivateModel 
            ref="selectModelOfPrivateRef" 
            :config=config 
            @submitRangeList="submitRangeList"
            @cancelRangeList="cancelRangeList"></selectDepartOfPrivateModel>
```

参数： 

| 属性 | 说明 | 类型 | 默认值 |
| ------ | ------ | ------ | ------ |
| config | 配置文件 | Object | {} |

config参数：

| 属性 | 说明 | 类型 | 默认值 |
| ------ | ------ | ------ | ------ |
| rootNodeId    | 筛选组织结构的根节点                                               | String | 不能为空 |
| rootNodeType  | 筛选组织结构的根节点的节点类型                                       | String | 不能为空 |
| title         | 组件的弹出框标题                                                   | String | '选择人员' |
| muliteChoice  | 单选还是多选                                                      | String | '选择人员' |
| type          | 0:可选部门、岗位、群组和搜索人员 1：只选择人员 ，选择部门显示部门内所有人员 | String | 0 |



