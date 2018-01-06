<template>
  <div class="hello">
    <h1> This is an image upload demo </h1>
    <h3>-By&nbsp;wrx</h3>
    <!-- 
      class:组件样式
      canedit: 组件是否可编辑
      imgData：图片初始化数据(obj)，数据格式：{key: name, key2: name2}
      uploadimg： 图片上传后的回调
      src：图片上传地址
      multiple：是否可以上传多张
      maclength：最多可以上传多少张（需要和multiple一起使用）
      clear：清除所有图片（用于初始化清空图片，同时数据源imgdata需要清空）
      change：触发组件的watch （用于初始化数据）
     -->
    <img-upload 
      class="yourBoxCss"
      :canEdit="canEdit" 
      :imgData="imgData"
      @uploadImg='uploadImg' 
      :src="imgSrc" 
      :multiple="multiple"
      :maxlength="imgMax"
      :clear="clearImgData"
      :change="upDateImg">
    </img-upload>
  </div>
</template>

<script>
import imgUpload from '@/components/imgUpload' 
export default {
  name: 'HelloWorld',
  data () {
    return {
      canEdit: true,
      multiple: true,
      imgSrc: '/api/imgs',
      imgMax: 6,
      clearImgData : true,
      imgData: {},
      upDateImg: false,
    }
  },
  methods: { 
    uploadImg (){
      // 上传图片触发此函数
    }, 
  },
  components : {
    imgUpload
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2{ font-weight: normal; }
.yourBoxCss{ display: inline-block;width: auto;min-width: 80% ;height: auto;padding: 10px;border: 1px solid #f2f2f2; }
</style>
