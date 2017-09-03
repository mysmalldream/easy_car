<template>
  <div id="hello">
    <!-- 教练提现申请 -->
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

        <div class="choose">
          <el-col :span="5">
            <label>级别:
              <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </label>
          </el-col>
        </div>

        <el-col :span="1">
          <div class="grid-content bg-purple">
            <el-button type="primary">查询</el-button>
          </div>
        </el-col>

      </el-form>
    </div>
    <!-- 数据表格 -->
    <el-table :data="tableData" border style="width: 100%" :stripe='true'>
      <el-table-column align='center' prop="num" label="序号" min-width="50">
      </el-table-column>
      <el-table-column align='center' prop="account" label="账号" min-width="100">
      </el-table-column>
      <el-table-column align='center' prop="name" label="姓名" min-width="80">
      </el-table-column>
      <el-table-column align='center' prop="idcard" label="身份证" min-width="150">
      </el-table-column>
      <el-table-column align='center' prop="grade" label="级别" min-width="50">
      </el-table-column>
      <el-table-column align='center' prop="cash" label="提款金额" min-width="90">
      </el-table-column>
      <el-table-column align='center' prop="bank_account" label="银行账号" min-width="200">
      </el-table-column>
      <el-table-column align='center' label="操作" min-width="70">
        <template scope="scope">
          <el-button @click="person_detail" type="success" size="mini">通 过</el-button>
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
    person_detail() {
      console.log("通过");
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
        value: '选项3',
        label: '三级'
      }],
      value: '',
      tableData: [{
        num: '1',
        name: '王小虎',
        account: '18609281213',
        idcard: '610122199011111220',
        grade: '一级',
        cash: '300',
        bank_account: '6217000000000000000000000000',
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

.query .choose .el-select {
  width: 110px;
}


</style>
