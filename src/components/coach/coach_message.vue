<template>
  <div id="hello">
    <!-- 教练信息概览 -->
    <!-- 查询 -->
    <div class="query">
      <el-form :inline="true" action="">
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

        <div class="choose">
          <el-col :span="5">
            <el-form-item label="身份等级:">
              <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="4">
            <el-form-item label="状态:">
              <el-select v-model="value1" placeholder="请选择">
                <el-option v-for="item in options1" :key="item.value1" :label="item.label" :value="item.value1">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </div>

        <el-col :span="1">
          <div class="grid-content bg-purple">
            <el-button type="primary" @click="click_button">查询</el-button>
          </div>
        </el-col>

      </el-form>
    </div>
    <!-- 数据表格 -->
    <el-table :data="tableData" border style="width: 110%" :stripe='true'>
      <el-table-column align='center' prop="num" label="序号" min-width="70">
      </el-table-column>
      <el-table-column align='center' prop="name" label="姓名" min-width="80">
      </el-table-column>
      <el-table-column align='center' prop="account" label="账号" min-width="140">
      </el-table-column>
      <el-table-column align='center' prop="data" label="注册时间" min-width="110">
      </el-table-column>
      <el-table-column align='center' prop="grade" label="身份等级" min-width="130">
      </el-table-column>
      <el-table-column align='center' prop="status" label="级别" min-width="90">
      </el-table-column>
      <el-table-column align='center' prop="days" label="本月上线天数" min-width="130">
      </el-table-column>
      <el-table-column align='center' prop="course" label="本月服务课时" min-width="130">
      </el-table-column>
      <el-table-column align='center' label="操作" min-width="200">
        <template scope="scope">
          <el-button @click="coach_details" type="primary" size="mini">个人详情</el-button>
          <el-button @click="set_rank" type="primary" size="mini">设置级别</el-button>
          <el-button @click="area_distribute" type="primary" size="mini">场地分配</el-button>
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
    coach_details() {
      console.log("个人详情");
      this.$router.push('/coach_details')
    },
    set_rank() {
      console.log("设置级别");
      this.$router.push('/set_rank')

    },
    area_distribute() {
      console.log("场地分配");
      this.$router.push('/area_distribute')

    },
    click_button() {
      console.log('查询按钮被电机了');
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
        label: '教练'
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
        days: '600',
        course: '300',
        leavefee: '3000',
        coupons: '3',
      }]
    }
  }
}
</script>

<style scoped>
/* 自定义的样式 */

.query {
  padding: 50px 20px 0px 20px;
}

.el-input {
  width: 150px;
}

#hello {
  margin: 20px 20px;
}

.query .choose .el-select {
  width: 110px;
}

</style>
