<template>
  <div id="hello">
    <!-- 教练收入 -->
    <!-- 查询 -->
    <el-form :inline="true" action="">
      <el-row :gutter="1">
        <el-col :span="5">
          <div class="grid-content bg-purple">
            <el-form-item label="账号:">
              <el-input size="small2" placeholder="请输入您的账号" v-model="input1">
              </el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="5">
          <div class="grid-content bg-purple">
            <el-form-item label="姓名:">
              <el-input size="small2" placeholder="请输入您的姓名" v-model="input2">
              </el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="5">
          <el-form-item label="级别:">
            <el-select v-model="value" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-button type="primary">查询</el-button>
      </el-row>
    </el-form>
    <!-- 数据表格 -->
    <el-table :data="tableData" border style="width: 100%" :stripe='true'>
      <el-table-column align='center' prop="num" label="序号" min-width="70">
      </el-table-column>
      <el-table-column align='center' prop="account" label="账号" min-width="130">
      </el-table-column>
      <el-table-column align='center' prop="name" label="姓名" min-width="80">
      </el-table-column>
      <el-table-column align='center' prop="grade" label="级别" min-width="110">
      </el-table-column>
      <el-table-column align='center' prop="pay_total" label="学员总消费" min-width="100">
      </el-table-column>
      <el-table-column align='center' prop="otherfee" label="实际收入" min-width="100">
        <template scope="scope">
          <el-button @click="coach_income" type="text" size="large">3003</el-button>
        </template>
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
  methods: {
    coach_income() {
      this.$router.push('/coach_income')
    },
  },
  data() {
    return {
      input1: '',
      input2: '',
      options: [{
        value: '选项1',
        label: '一级'
      }, {
        value: '选项2',
        label: '二级'
      }, {
        value: '选项2',
        label: '...'
      }],
      value: '',
      tableData: [{
        num: '1',
        account: '18609281213',
        name: '王小虎',
        grade: '一级',
        pay_total: '300',
        otherfee: '60',
      }, {
        num: '1',
        account: '18609281213',
        name: '王小虎',
        grade: '二级',
        pay_total: '300',
        otherfee: '60',
      }]
    }
  }
}
</script>

<style scoped>
/* 自定义的样式 */
#hello {
  margin: 70px 20px;
}
.el-input {
  width: 130px;
}

.el-row {
  margin-bottom: -10px;
}

.el-select {
  width: 110px;
}
</style>
