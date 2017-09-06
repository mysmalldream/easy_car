<template>
  <div id="hello">
    <!-- 学员信息概览 -->
    <!-- 查询 -->
    <div class="query">
      <el-form :inline="true" action="">
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <label>账号:
              <el-input size="small2" placeholder="请输入您的账号" v-model="input1">
              </el-input>
            </label>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <label>姓名:
              <el-input size="small2" placeholder="请输入您的姓名" v-model="input2">
              </el-input>
            </label>
          </div>
        </el-col>
        <div class="choose">
          <el-col :span="5">
            <label>身份等级:
              <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </label>
          </el-col>

          <el-col :span="4">
            <label>状态:
              <el-select v-model="value1" placeholder="请选择">
                <el-option v-for="item in options1" :key="item.value1" :label="item.label" :value="item.value1">
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
      <el-table-column align='center' prop="num" label="序号" min-width="70">
      </el-table-column>
      <el-table-column align='center' prop="name" label="姓名" min-width="80">
      </el-table-column>
      <el-table-column align='center' prop="account" label="账号" min-width="130">
      </el-table-column>
      <el-table-column align='center' prop="data" label="注册时间" min-width="110">
      </el-table-column>
      <el-table-column align='center' prop="grade" label="身份等级" min-width="100">
      </el-table-column>
      <el-table-column align='center' prop="status" label="状态" min-width="90">
      </el-table-column>
      <el-table-column align='center' prop="fee" label="报名费" min-width="80">
      </el-table-column>
      <el-table-column align='center' prop="otherfee" label="其他费用" min-width="100">
        <template scope="scope">
          <el-button @click="other_fee" type="text" size="small">300</el-button>
        </template>
      </el-table-column>
      <el-table-column align='center' prop="leavefee" label="余额" min-width="70">
      </el-table-column>
      <el-table-column align='center' label="可用卡券数" min-width="110">
        <template scope="scope">
          <el-button @click="kaquan_detail" type="text" size="small">3</el-button>
        </template>
      </el-table-column>

      <el-table-column align='center' label="操作" min-width="100">
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
  created: function() {
  },
  methods: {
    other_fee() {
      console.log("其他费用");
      this.$router.push('/other_fee')
    },
    kaquan_detail() {
      console.log("卡券数量");
      this.$router.push('/student_coupons')
    },
    person_detail() {
      console.log("个人详情");
      this.$router.push('/student_details')
    },
    agent_detail() {
      console.log("代理详情");
      this.$router.push('/agent_details')

    }
  },
  data() {
    return {
      input1: '',
      input2: '',
      options: [{
        value: '选项1',
        label: '普通用户'
      }, {
        value: '选项2',
        label: '代理人'
      }, {
        value: '选项3',
        label: '代理商'
      }, {
        value: '选项4',
        label: '普通学员'
      }, {
        value: '选项5',
        label: 'VIP学员'
      }],
      value: '',
      options1: [{
        value1: '选项1',
        label: '已下单'
      }, {
        value1: '选项2',
        label: '预定'
      }, {
        value1: '选项3',
        label: '全额'
      }, {
        value1: '选项4',
        label: '科目一'
      }, {
        value1: '选项5',
        label: '科目二'
      }, {
        value1: '选项6',
        label: '科目三'
      }, {
        value1: '选项7',
        label: '科目四'
      }, {
        value1: '选项8',
        label: '完成'
      }],
      value1: '',
      tableData: [{
        num: '1',
        name: '王小虎',
        account: '18609281213',
        data: '2017-08-08',
        grade: '普通用户',
        status: '已下单',
        fee: '600',
        otherfee: '300',
        leavefee: '3000',
        coupons: '3',
      }]
    }
  }
}
</script>

<style scoped>
/* 自定义的样式 */
#hello {
  margin: 20px 20px;
  width: 1100px;
}

.query {
  padding-top: 60px;
  padding-bottom: 50px;
}

.el-input {
  width: 130px;
}

.query .choose .el-select {
  width: 110px;
}

.el-button+.el-button {
  margin-left: 0px;
}
</style>
