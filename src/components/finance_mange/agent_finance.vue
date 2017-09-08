<template>
  <div id="hello">
    <!-- 代理人财务 -->
    <!-- 查询 -->
    <el-form :inline="true" class="demo-form-inline">
      <el-row :gutter="10">
        <el-col :span="6">
          <el-form-item label="账号:">
            <el-input placeholder="请输入您的账号"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="姓名:">
            <el-input type="text" v-model="input2" placeholder="请输入您的姓名"></el-input>
          </el-form-item>
          </label>
        </el-col>
        <el-button type="primary">查询</el-button>
      </el-row>
    </el-form>
    <!-- 数据表格 -->
    <el-table :data="tableData" border style="width: 100%" :stripe='true'>
      <el-table-column align='center' prop="num" label="序号" min-width="50">
      </el-table-column>
      <el-table-column align='center' prop="account" label="账号" min-width="130">
      </el-table-column>
      <el-table-column align='center' prop="name" label="姓名" min-width="80">
      </el-table-column>
      <el-table-column align='center' prop="first_pay" label="一级学员消费" min-width="110">
      </el-table-column>
      </el-table-column>
      <el-table-column align='center' prop="first_backomoney" label="一级返佣金额" min-width="100">
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
      this.$router.push('/back_money')
    },
  },
  data() {
    return {
      input1: '',
      input2: '',
      tableData: [{
        num: '1',
        account: '18609281213',
        name: '王小虎',
        first_pay: '600',
        first_backomoney: '60',
      }, {
        num: '1',
        account: '18609281213',
        name: '王小虎',
        first_pay: '600',
        first_backomoney: '60',
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


.el-row {
  margin-bottom: -10px;
}

.el-select {
  width: 110px;
}
</style>
