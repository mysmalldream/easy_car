<template>
  <div id="hello">
    <!-- 约考记录 -->
    <!-- 查询 -->
    <el-form action="" :inline="true">
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <div class="block">
              <el-form-item label="考试时间:">
                <el-date-picker v-model="value3" type="date" placeholder="考试日期" :picker-options="pickerOptions0">
                </el-date-picker> ---
                <el-time-picker v-model="value4" :picker-options="{
                    selectableRange: '00:00:00 - 23:00:00'
                  }" placeholder="考试时间">
                </el-time-picker>
              </el-form-item>
            </div>
          </div>
        </el-col>
      </el-row>
      <div class="choose">
        <el-form-item label="预约人:">
          <el-input type="text" v-model="input1" placeholder="请输入您的姓名"></el-input>
        </el-form-item>
        <el-form-item label="电话:">
          <el-input type="text" v-model="input2" placeholder="请输入您的电话"></el-input>
        </el-form-item>
        <el-form-item label="状态:">
          <el-select v-model="value" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="科目:">
          <el-select v-model="value1" placeholder="请选择">
            <el-option v-for="item in options1" :key="item.value1" :label="item.label" :value="item.value1">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="支付方式:">
          <el-select v-model="value2" placeholder="请选择">
            <el-option v-for="item in options2" :key="item.value1" :label="item.label" :value="item.value1">
            </el-option>
          </el-select>
        </el-form-item>
        <el-button @click="onSubmit" type="primary">查询</el-button>
      </div>
    </el-form>
    <!-- 数据表格 -->
    <el-table :data="tableData" border style="width: 100%" :stripe='true'>
      <el-table-column fixed='left' align='center' prop="num" label="序号" min-width="70">
      </el-table-column>
      <el-table-column align='center' prop="name" label="预约人" min-width="80">
      </el-table-column>
      <el-table-column align='center' prop="idcard" label="身份证号" min-width="200">
      </el-table-column>
      <el-table-column align='center' prop="phone" label="电话" min-width="130">
      </el-table-column>
      <el-table-column align='center' prop="type" label="课程类型" min-width="100">
      </el-table-column>
      <el-table-column align='center' prop="subject" label="通关科目" min-width="100">
      </el-table-column>
      <el-table-column align='center' prop="order" label="预约科目" min-width="100">
      </el-table-column>
      <el-table-column align='center' prop="address" label="地址" min-width="190">
      </el-table-column>
      <el-table-column align='center' prop="testtime" label="考试时间" min-width="160">
      </el-table-column>
      <el-table-column align='center' prop="paymoney" label="预付金额" min-width="100">
      </el-table-column>
      <el-table-column align='center' prop="paytype" label="支付方式" min-width="100">
      </el-table-column>
      <el-table-column align='center' prop="status" label="状态" min-width="100">
      </el-table-column>
      <el-table-column fixed="right" align='center' prop="handle" label="操作" min-width="100">
        <template scope="scope">
          <el-button @click="order_test" type="text" size="small">通过预约</el-button>
          <el-button @click="pass_test" type="text" size="small">通过考试</el-button>
          <el-button @click="fail_test" type="text" size="small">考试失败</el-button>
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
    onSubmit() {
      console.log('查询按钮被点击了!');
    },
    order_test() {
      console.log('通过预约!');
    },
    pass_test() {
      console.log('通过考试!');
    },
    fail_test() {
      console.log('考试失败!');
    },
  },
  data() {
    return {
      input1: '',
      input2: '',
      options: [{
        value: '选项1',
        label: '成功'
      }, {
        value: '选项2',
        label: '失败'
      }],
      value: '',
      options1: [{
        value1: '选项1',
        label: '科目一'
      }, {
        value1: '选项2',
        label: '科目二'
      }, {
        value1: '选项3',
        label: '科目三'
      }, {
        value1: '选项3',
        label: '科目四'
      }],
      value2: '',
      options2: [{
        value1: '选项1',
        label: '余额'
      }, {
        value1: '选项2',
        label: '支付宝'
      }, {
        value1: '选项3',
        label: '银行卡'
      }, {
        value1: '选项3',
        label: '微信'
      }],
      value1: '',
      pickerOptions0: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7;
        }
      },
      value4: new Date(),
      value3: new Date(),
      value6: '',
      input1: '',
      tableData: [{
        num: '1',
        name: '王小虎',
        idcard: '123456789012345678',
        phone: '12345678909',
        type: 'VIP',
        subject: '科目一',
        order: '科目二',
        address: '陕西省西安市长安区XX街道',
        testtime: '2017-08-08 13：30',
        paymoney: '50',
        paytype: '支付宝',
        status: '考试通过',
        handle: '通过预约',
      }]
    };
  }
}
</script>
<style scoped>
/* 自定义的样式 */

#hello {
  margin: 70px 20px;
  width: 1069px;
}

.el-select {
  width: 100px;
}

.choose .el-button {
  margin-left: 25px;
}

.choose .el-input {
  width: 150px;
}

.el-button+.el-button {
  margin-left: 0px;
}
</style>
