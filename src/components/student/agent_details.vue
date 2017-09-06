<template>
  <div id="hello">
    <!-- 代理详情-->
    <!-- 查询 -->
    <el-form action="" :inline="true">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="block">
              <span class="demonstration">注册日期:</span>
              <el-date-picker v-model="value6" type="daterange" placeholder="请选择注册日期范围">
              </el-date-picker>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="block">
              <el-form-item label="账号:">
                <el-input size="small2" placeholder="请输入您的账号" v-model="input1">
                </el-input>
              </el-form-item>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="block">
              <el-form-item label="姓名:">
                <el-input size="small2" placeholder="请输入您的姓名" v-model="input2">
                </el-input>
              </el-form-item>
            </div>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple">
            <div class="block">
              <el-button type="primary">查询</el-button>
            </div>
          </div>

        </el-col>
      </el-row>
    </el-form>
    <!-- 数据表格 -->
    <el-table :data="tableData" border style="width: 90%" :stripe='true'>
      <el-table-column align='center' prop="num" label="序号" min-width="50">
      </el-table-column>
      <el-table-column align='center' prop="name" label="姓名" min-width="70">
      </el-table-column>
      <el-table-column align='center' prop="account" label="账号" min-width="100">
      </el-table-column>
      <el-table-column align='center' prop="data" label="注册时间" min-width="100">
      </el-table-column>
      <el-table-column align='center' prop="target" label="关系" min-width="100">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import 'element-ui/lib/index.js'


Vue.use(Element)


export default {
  name: 'hello',
  created: function() {
  },
  created() {
  },
  methods: {
  },
  data() {
    return {
      value6: '',
      input1: '',
      input2: '',
      tableData: [{
        num: '1',
        name: '王小虎',
        account: '18609281213',
        data: '2017-08-08',
        target: '学员',
      }, {
        num: '2',
        name: '王小虎',
        account: '18609281213',
        data: '2017-08-08',
        target: '队友',
      }, {
        num: '3',
        name: '王小虎',
        account: '18609281213',
        data: '2017-08-08',
        target: '学员',
      }]
    }
  }
}
</script>

<style scoped>
/* 自定义的样式 */

#hello {
  margin: 70px 20px;
  width: 1100px;
}

.el-input {
  width: 180px;
}
</style>
