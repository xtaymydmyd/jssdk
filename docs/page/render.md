# render函数 (场景：iview -> table)

## 介绍 
1. render方法的实质就是生成template模板； 
2. 通过调用一个方法来生成，而这个方法是通过render方法的参数传递给它的； 
3. 这个方法有三个参数，分别提供标签名，标签相关属性，标签内部的html内容 
4. 通过这三个参数，可以生成一个完整的模板

!>https://blog.csdn.net/qq78827534/article/details/80792514 (render函数介绍，以及 render: h => h(App))

备注： 
> 1、render方法可以使用JSX语法，但需要Babel plugin插件；

> 2、render方法里的第三个参数可以使用函数来生成多个组件（特别是如果他们相同的话），只要生成结果是一个数组，且数组元素都是VNode即可；

```js
...
columns : [{
    title : '标题',
    key : 'account',
    render: (h , params) => {
        return h('div', {
            class : 'flex user_info flex-align-items'
        },[
            h('img' , {
                class : 'header_wrap' , 
                attrs : {
                    src : params.row.headUrl ? params.row.headUrl : defaultHeader
                }
            }), 
            h('div' , {
                class : 'info_wrap'
            },[
                h('div' , {
                    class :'name'
                } , params.row.userName),
                h('div' , {
                    class :'account'
                } , params.row.account)
            ])
        ])
    }
},{
    title : '部门',
    key : 'deptName'
},{
    title : '评价人数',
    align: 'center',
    key : 'totalEvaluators',
    render: (h , params) => {
        return h('div' , params.row.totalEvaluators + '人')
    }
},{
    title : '评价均分',
    key : 'svgScore',
    width : 180,
    render: (h , params) => {
        return h('div' , {
            class : 'eve_wrap flex  flex-align-items'
        },[
            h('div' , {
                class : 'progress_wrap flex-1'
            },[
                h('div' , {
                    style : {
                        width : '100%'
                    },
                    class: 'progress_percent'
                })
            ]),
            h('div' ,{
                class : 'progress_text'
            }, params.row.svgScore + '分')
        ])
    }
},{
    title : '操作' ,
    key : 'id',
    width : 210,
    render : (h , params) => {
        return h('div' , {
            class : 'opera_wrap flex flex-align-items'
        },[
            h('div' , {
                class : 'opera_text',
                on: {
                    click:()=>{
                        
                    }
                }
            } , '二维码'),
            h('div' , {
                class : 'opera_text',
                on: {
                    click:()=>{
                        this.$router.push({
                            path : 'detailList',
                            query : {
                                account : params.row.account
                            }
                        })
                    }
                }
            } , '评价记录'),
            h('div' , {
                class : 'opera_line'
            }),
            h('Dropdown' , [
                h('div' , {
                    class : 'flex flex-align-items'
                },[
                        h('div' , {
                        class : 'dropdown_text'
                    } , '更多'),
                    h('Icon',{
                        props:{
                            type:'arrow-down-b'
                        }
                    }),
                ]),
                h('DropdownMenu' , {
                    slot : 'list',
                },[
                    h('DropdownItem' , {
                        nativeOn : {
                            click : () => {
                                
                            }
                        }
                    } , '编辑'),
                    h('DropdownItem' , {
                        nativeOn : {
                            click : () => {

                            }
                        }
                    } , '删除') 
                ])
            ])
        ])
    }
}],
...
```

