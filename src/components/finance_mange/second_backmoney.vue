<template>
  <div id="hello">
    <!-- 二级返佣明细 -->
    <el-form :inline="true" action="">
      <el-row :gutter="1">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-form-item label="账号:">
              <el-input size="small2" placeholder="请输入您的账号" v-model="input1">
              </el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-form-item label="姓名:">
              <el-input size="small2" placeholder="请输入您的姓名" v-model="input2">
              </el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-button type="primary">查询</el-button>
      </el-row>
    </el-form>
    <!-- 数据表格 -->
    <el-table :data="tableData" border style="width: 100%" :stripe='true'>
      <el-table-column align='center' prop="num" label="序号" min-width="50">
      </el-table-column>
      <el-table-column align='center' prop="account" label="代理人账号" min-width="80">
      </el-table-column>
      <el-table-column align='center' prop="name" label="姓名" min-width="100">
      </el-table-column>
      <el-table-column align='center' prop="consume" label="学员总消费" min-width="80">
      </el-table-column>
      <el-table-column align='center' prop="back_money" label="返佣金额" min-width="90">
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
    click_button() {
      console.log('查询按钮被电机了');
    }
  },
  data() {
    return {
      input1: '',
      input2: '',
      tableData: [{
        num: '1',
        account: '18609281213',
        name: '薛宝钗',
        consume: '100',
        back_money: '10',
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
