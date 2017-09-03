<template>
  <div id="hello">
    <!-- 代理商财务 -->
    <!-- 查询 -->
    <div class="query">
      <el-form :inline="true" class="demo-form-inline">
        <el-row :gutter="10">
          <el-col :span="7">
            <el-form-item label="账号:">
              <el-input placeholder="请输入您的账号"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="姓名:">
              <el-input type="text" v-model="input2" placeholder="请输入您的姓名"></el-input>
            </el-form-item>
            </label>
          </el-col>
          <el-button type="primary">查询</el-button>

        </el-row>
      </el-form>
    </div>
    <!-- 数据表格 -->
    <el-table :data="tableData" border style="width: 100%" :stripe='true'>
      <el-table-column align='center' prop="num" label="序号" min-width="70">
      </el-table-column>
      <el-table-column align='center' prop="account" label="账号" min-width="100">
      </el-table-column>
      <el-table-column align='center' prop="name" label="姓名" min-width="100">
      </el-table-column>
      <el-table-column align='center' prop="first_studentpay" label="一级学员消费" min-width="100">
      </el-table-column>
      <el-table-column align='center' prop="first_backmoney" label="一级返佣金额" min-width="100">
        <template scope="scope">
          <el-button type="text" @click="first_backmoney" size="large">10</el-button>
        </template>
      </el-table-column>
      <el-table-column align='center' prop="second_studentpay" label="二级学员消费" min-width="100">
      </el-table-column>
      <el-table-column align='center' prop="second_backmoney" label="二级返佣金额" min-width="100">
        <template scope="scope">
          <el-button type="text" @click="second_backmoney" size="large">12</el-button>
        </template>
      </el-table-column>
      <el-table-column align='center' prop="back_money" label="返佣总金额" min-width="100">
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
  methods: {
    first_backmoney() {
      this.$router.push('/first_backmoney')
    },
    second_backmoney() {
      this.$router.push('/second_backmoney')
    },
  },
  data() {
    return {
      input1: '',
      input2: '',
      tableData: [{
        num: '1',
        account: '18676541234',
        name: '薛宝钗',
        first_studentpay: '100',
        first_backmoney: '10',
        second_studentpay: '200',
        second_backmoney: '4',
        back_money: '24',
      }]
    };
  }
}
</script>
<style scoped>
/* 自定义的样式 */

.query {
  padding: 0px 20px 0px 20px;
}

.el-input {
  width: 130px;
}

#hello {
  margin: 20px 20px;
}
/* 默认的样式 */

</style>
