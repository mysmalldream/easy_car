<template>
  <div id="hello">
    <!-- 题库管理 -->
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="科目二" name="first">
        <el-row :gutter="20">
          <el-col :span="6">
            <el-form action="" :inline="true">
              <el-form-item label="标题">
                <el-input v-model="formInline.user" placeholder="请输入标题"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="6">
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-col>
          <el-col :span="6">
            <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" accept="video/*" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList2" list-type="picture" :multiple=true>
              <el-button type="primary">
                <i class="el-icon-upload el-icon--right"> 上传</i>
              </el-button>
            </el-upload>
          </el-col>
          <el-col :span="6">
            <el-button type="" icon="delete">删除</el-button>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="科目三" name="second">科目三</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(Element)

export default {
  name: 'hello',
  data() {
    return {
       dialogImageUrl: '',
        dialogVisible: false,
      activeName: 'first',
      fileList2: [{ name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' },
      { name: 'food3.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' },
      { name: 'food3.jpeg', url: '../../../static/img/test.jpg' }],
      formInline: {
        user: '',
      }
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    onSubmit() {
      console.log('查询按钮被点击了');
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
     handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
  }
}
</script>
<style scoped>
/* 自定义的样式 */

#hello {
  margin: 60px 20px;
  width: 1069px;
}
.el-tabs{
  width:1100px;
}
</style>

