<template>
  <div id="hello">
    <!-- 教练收入明细 -->
    <!-- 时间 -->
    <div class="query">
      <el-form :inline="true" class="demo-form-inline">
        <el-row :gutter="10">
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <div class="block">
                <el-form-item label="消费时间:">
                  <el-date-picker v-model="value3" type="date" placeholder="消费日期">
                  </el-date-picker> ---
                  <el-time-picker v-model="value4" :picker-options="{selectableRange: '00:00:00 - 23:00:00'}" placeholder="消费时间">
                  </el-time-picker>
                </el-form-item>
              </div>
            </div>
          </el-col>
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
    </div>
    <!-- 数据表格 -->
    <el-table :data="tableData" border style="width: 100%" :stripe='true'>
      <el-table-column align='center' prop="num" label="序号" min-width="70">
      </el-table-column>
      <el-table-column align='center' prop="account" label="学员账号" min-width="100">
      </el-table-column>
      <el-table-column align='center' prop="name" label="姓名" min-width="100">
      </el-table-column>
      <el-table-column align='center' prop="consume" label="消费" min-width="100">
      </el-table-column>
      <el-table-column align='center' prop="consume_time" label="消费时间" min-width="100">
      </el-table-column>
      <el-table-column align='center' prop="back_money" label="返佣金额" min-width="100">
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
  },
  data() {
    return {
      input1: '',
      input2: '',
      value4: new Date(),
      value3: new Date(),
      tableData: [{
        num: '1',
        account: '18676541234',
        name: '薛宝钗',
        consume: '100',
        consume_time: '2017-08-08  13：14',
        back_money: '10',
      }]
    };
  }
}
</script>
<style scoped>
/* 自定义的样式 */

#hello {
  margin: 70px 20px;
}

.el-date-editor.el-input {
  width: 120px;
}

.el-row {
  margin-bottom: -15px;
}
</style>
