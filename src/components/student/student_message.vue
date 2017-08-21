<template>
  <div id="hello">
    
    <!-- 查询 -->
    <div class="query">
      <form action="">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="block">
              <span class="demonstration">注册日期:</span>
              <el-date-picker v-model="value6" type="daterange" placeholder="请选择申请日期范围">
              </el-date-picker>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="block">
              <label>账号:
                <el-input size="small2" placeholder="请输入您的账号" v-model="input1">
                </el-input>
              </label>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <label>姓名:
              <el-input size="small2" placeholder="请输入您的账号" v-model="input1">
              </el-input>
            </label>
          </div>
        </el-col>

        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-button :plain="true" type="success">查询</el-button>
          </div>
        </el-col>

      </form>
    </div>
    <!-- 数据表格 -->
    <el-table :data="tableData" border style="width: 100%" :stripe='true'>
      <el-table-column align='center' prop="num" label="序号" min-width="50">
      </el-table-column>
      <el-table-column align='center' prop="name" label="姓名" min-width="70">
      </el-table-column>
      <el-table-column align='center' prop="account" label="账号" min-width="100">
      </el-table-column>
      <el-table-column align='center' prop="data" label="注册时间" min-width="100">
      </el-table-column>
      <el-table-column align='center' prop="target" label="身份等级" min-width="100">
      </el-table-column>
      <el-table-column align='center' prop="excuse" label="课程进度" min-width="100">
      </el-table-column>
      <el-table-column align='center' prop="datas" label="余额" min-width="100">
      </el-table-column>
      <el-table-column align='center' label="可用卡券数" min-width="100">
        <template scope="scope">
          <el-button @click="kaquan_detail" type="text" size="small">3</el-button>
        </template>
      </el-table-column>
      <el-table-column align='center' label="操作" min-width="150">
        <template scope="scope">
          <el-button @click="person_detail" type="primary" size="mini">个人详情</el-button>
          <el-button @click="agent_detail" type="primary" size="mini">代理详情</el-button>
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
  methods: {
    kaquan_detail() {
      console.log("卡券数量");
    },
    person_detail() {
      console.log("个人详情");
    },
    agent_detail() {
      console.log("代理详情");
    }
  },
  data() {
    return {
      value6: '',
      value7: '',
      input1: '',
      input2: '',
      tableData: [{
        num: '1',
        name: '王小虎',
        account: '18609281213',
        data: '2017-08-08',
        target: '代理人',
        excuse: '理由',
        datas: '2017-08-10',
        person: '李主管',
      }]
    }
  }
}
</script>

<style scoped>
/* 自定义的样式 */
.query{
  padding: 40px 20px 30px 20px;
  margin-bottom: 30px;
}
.el-input {
  width: 200px;
}
.block,.bg-purple[data-v-55a5009d]{
  background-color: #fff;
}


/* 默认的样式 */
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
