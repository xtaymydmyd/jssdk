
### 移动端选择人员

组件地址 : `https://github.com/xtaymydmyd/lxComponents/tree/master/App` ， 可下载后加入到项目中；

## Install

### Install VUX 

npm 安装:
```
"vux": "2.9.2"
```

## Usage

在apps下增加 selector(选择人员) 文件夹 (作为单个项目)

```vue
<script>
    import selectMethod from 'selector/assets/js/select.js'
    export default {
        data () {
            return {
                
            }
        },
        mounted:function () {
            if(selectMethod.isFromSelectStaff()){
                console.log(selectMethod.getResult())
            }
        },
        methods:{
            selectStaff(type){
                var param = { 
                    deptId : '1',//父部门id 
                    deptIdList : [{
                        "id":"0017d5a752ce4175a0f8f8b0b9a14a14",
                        "nodeType":"1"
                    },{
                        "id":"1",
                        "nodeType":"0"
                    }],
                    withUser : 1, //是否查询用户  1：查询用户，2:不查询用户
                    muliteChoice : 1,//是否多选人员 1 ：多选  2：单选
                    title : '选择参会人',//标题
                    ignoreOneself : 1,//是否忽略自己 ，忽略：1；不忽略：其他 
                    userTypeIdList : [], //用户类型列表
                    condition : ['depart' , 'post' , 'group'],
                    userList : [{
                        'name' : '锁生斌',
                        'id' : '4732b1f78af711e89ff5c790f4588ec7'
                    }],
                }
                selectMethod.toSelect(param);  
            }
        }
    }
</script>
```

## Usage

选择部门

```vue
<script>
    import selectMethod from 'selector/assets/js/select.js'
    export default {
        data () {
            return {
                
            }
        },
        mounted:function () {
            if(selectMethod.isFromSelectStaff()){
                console.log(selectMethod.getResult())
            }
        },
        methods:{
            selectStaff(type){
                var param = { 
                    title : '选择部门',
                    withUser : 2,
                    userTypeIdList : [], 
                    deptId : '082ca649198a48aa958bbc406c2dcfda',
                    muliteChoice : 1,
                    condition : ['depart'],
                }
                selectMethod.toSelect(param);  
            }
        }
    }
</script>
```

# API

| 属性 | 说明 | 类型 | 默认值 |
| ------ | ------ | ------ | ------ |
| title | 标题 | String | '选择参会人' |
| deptId | 根节点部门id ,deptId必填 | String | 必填 |
| deptIdList | 部门id列表 | Array | 必填 |
| withUser | 是否查询用户 | String | 1：查询用户，2:不查询用户 |
| muliteChoice | 是否多选 | String | 是否多选人员 1 ：多选  2：单选 |
| ignoreOneself | 是否忽略自己 | Number | 忽略：1；不忽略：其他  |
| userTypeIdList | 用户类型列表 | Array | [] |
| condition | 表示插件提供‘部门’（'depart'）‘群组’(group)、‘post’(岗位) | Array | 必填 ： ['depart' , 'post' , 'group'] |
| userList | 默认已选人员 | Array | [] |


# Events

| 事件名 | 说明 | 返回值 |
| ------ | ------ | ------ |
| selectMethod.isFromSelectStaff() | 是否选择啦人员 | Boolean |
| selectMethod.getResult() | 获取选择人员列表 | [] |


# 返回值说明 


| key | value说明 | 
| ------ | ------ |
| label | 名称 |
| id | 返回数据id |
| type | 返回数据类型 |


说明：

| 值 | 说明 |
| ------ | ------ |
| 0 | 部门 |
| 1 | 人员 |
| 3 | 群组 |
| 2 | 岗位 |

# 请求变量

devConstGlobal.js
```js
HostStaffOrg: 'http://192.168.108.104:9818/staffOrg/'
```

constGlobal.js
```js
HostStaffOrg: mainHost + '/staffOrg/',
```
