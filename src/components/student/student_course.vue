<template>
  <div id="hello">
    <!-- 课程报名管理 -->
    <!-- 查询 -->
    <el-form action="" :inline="true">
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <div class="block">
              <span class="demonstration">报名日期:</span>
              <el-date-picker v-model="value6" type="daterange" placeholder="请选择报名日期范围">
              </el-date-picker>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-form-item label="姓名:">
        <el-input type="text" v-model="input1" placeholder="请输入您的姓名"></el-input>
      </el-form-item>
      <el-form-item label="电话:">
        <el-input type="text" v-model="input2" placeholder="请输入您的电话"></el-input>
      </el-form-item>
      <el-form-item label="代理商:">
        <el-select v-model="value" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="报名套餐:">
        <el-select v-model="value1" placeholder="请选择">
          <el-option v-for="item in options1" :key="item.value1" :label="item.label" :value="item.value1">
          </el-option>
        </el-select>
      </el-form-item>
      <el-button @click="onSubmit" type="primary">查询</el-button>
    </el-form>
    <!-- 数据表格 -->
    <el-table :data="tableData" border style="width: 100%" :stripe='true'>
      <el-table-column align='center' prop="num" label="序号" min-width="50">
      </el-table-column>
      <el-table-column align='center' prop="name" label="姓名" min-width="80">
      </el-table-column>
      <el-table-column align='center' prop="idcard" label="身份证号" min-width="160">
      </el-table-column>
      <el-table-column align='center' prop="phone" label="电话" min-width="120">
      </el-table-column>
      <el-table-column align='center' prop="meal" label="报名套餐" min-width="100">
      </el-table-column>
      <el-table-column align='center' prop="money" label="预付金额" min-width="80">
      </el-table-column>
      <el-table-column align='center' prop="pay" label="支付方式" min-width="100">
      </el-table-column>
      <el-table-column align='center' prop="agent" label="代理人" min-width="90">
      </el-table-column>
      <el-table-column align='center' prop="date" label="报名日期" min-width="100">
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
    onSubmit() {
      console.log('查询按钮被点击了!');
    },
  },
  data() {
    return {
      input1: '',
      input2: '',
      options: [{
        value: '选项1',
        label: '李主管'
      }, {
        value: '选项2',
        label: '王主管'
      }, {
        value: '选项3',
        label: '测试'
      }],
      value: '',
      options1: [{
        value1: '选项1',
        label: '680元普通班'
      }, {
        value1: '选项2',
        label: '2580元VIP班'
      }, {
        value1: '选项3',
        label: '代理商'
      }],
      value1: '',
      pickerOptions2: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
      value6: '',
      input1: '',
      tableData: [{
        num: '1',
        name: '王小虎',
        idcard: '123456789012345678',
        phone: '12345678909',
        meal: '2580元VIP班',
        money: '50',
        pay: '支付宝',
        agent: '李主管',
        date: '2017-08-08',
      }]
    };
  }
}
</script>
<style scoped>
/* 自定义的样式 */

#hello {
  margin: 70px 20px;
  width: 1100px !important;
}

.el-select {
  width: 130px;
}

.el-button {
  margin-left: 20px;
}

.el-input {
  width: 210px;
}

.el-row {
  margin-bottom: 10px;
}
</style>
