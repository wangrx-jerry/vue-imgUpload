# 组件说明
## 这是一个基于vue2.0 的图片上传demo
[预览]( https://wangrx-jerry.github.io/vue-imgUpload/dist/index.html)
> 该组件用于上传本地图片，支持：
1. 图片预览
2. 图片删除
3. 自定义图片上传张数
4. 图片数据初始化，并判断是否可编辑（删除，新增）
5. 图片上传回调
6. 图片压缩（canvas方法）
7. 支持ios设备（拍摄图片方向处理）
8. 图片上传进度条
> 组件依赖 
 
使用了exif-js，用来兼容ios设配：ios和部分三星设备拍照上传会有图片被旋转的问题
> 启动：

```
npm（cnpm）i
npm(cnpm) run dev
```

> 组件参数说明
- class:组件样式
- canEdit: 组件是否可编辑
- imgData：图片初始化数据(obj)，数据格式：{key: 图片地址, key2: 图片地址2}
- uploadimg： 图片上传后的回调
- src：图片上传地址
- multiple：是否可以上传多张
- maxlength：最多可以上传多少张（需要和multiple一起使用）
- clear：清除所有图片（用于初始化清空图片，同时数据源imgdata需要清空）
- change：触发组件的watch （用于初始化数据）
> 使用方法：
- 如果有图片数据需要初始化：

    需要传入imgdata数据，需要是object，格式是{key: value}，其中key是图片的name，value是图片的地址
- 如果不需要初始化图片数据：

    忽略imgdata
- 如果组件没有重载（打开组件后经过一顿xxx上传了几张图片然后又隐藏了，没有触发页面刷新又打开了页面），而你又需要进入页面清空所有之前上传的图片数据：

    这时候你可以将clear改为true，同时更改change的值（例如：change = !change），触发组件的watch，组件的watch会根据clear的true/false来判断是否需要清空数据再执行初始化函数
