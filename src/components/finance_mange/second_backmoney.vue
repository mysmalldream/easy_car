<template>
  <div id="hello">
    <!-- 二级返佣明细 -->
    <!-- 查询 -->
    <div class="query">
      <el-form :inline="true" action="">
        <el-col :span="5">
          <div class="grid-content bg-purple">
            <label>账号:
              <el-input size="small2" placeholder="请输入您的账号" v-model="input1">
              </el-input>
            </label>
          </div>
        </el-col>
        <el-col :span="5">
          <div class="grid-content bg-purple">
            <label>姓名:
              <el-input size="small2" placeholder="请输入您的姓名" v-model="input2">
              </el-input>
            </label>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content bg-purple">
            <el-button type="primary" @click="click_button">查询</el-button>
          </div>
        </el-col>

      </el-form>
    </div>
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

.query {
  padding: 0px 20px 50px 20px;
}

.el-input {
  width: 130px;
}

#hello {
  margin: 20px 20px;
}


</style>
