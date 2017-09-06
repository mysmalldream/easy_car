<template>
  <div id="hello">
    <!-- 订单管理 -->
    <!-- 查询 -->
    <div class="query">
      <el-form action="">
        <el-row>
          <el-col :span="20">
            <div class="grid-content bg-purple">
              <div class="block">
                <span class="demonstration">预约时间:</span>
                <el-date-picker v-model="value3" type="date" placeholder="预约时间" :picker-options="pickerOptions0">
                </el-date-picker>------
                <el-time-picker v-model="value4" :picker-options="{
                            selectableRange: '00:00:00 - 23:00:00'
                          }" placeholder="考试时间">
                </el-time-picker>
                <span class="demonstration">接单时间:</span>
                <el-date-picker v-model="value5" type="date" placeholder="接单时间" :picker-options="pickerOptions0">
                </el-date-picker>------
                <el-time-picker v-model="value7" :picker-options="{
                            selectableRange: '00:00:00 - 23:00:00'
                          }" placeholder="考试时间">
                </el-time-picker>
              </div>
            </div>
          </el-col>
        </el-row>

        <div class="choose">
          <label>状态:
            <el-select v-model="value" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </label>
          <label>教练:
            <el-input type="text" v-model="input1" placeholder="请输入您的姓名"></el-input>
          </label>
          <label>学员:
            <el-input type="text" v-model="input2" placeholder="请输入您的电话"></el-input>
          </label>
          <el-button @click="onSubmit" type="primary">查询</el-button>
        </div>

      </el-form>
    </div>
    <!-- 数据表格 -->
    <el-table :data="tableData" border style="width: 100%" :stripe='true'>
      <el-table-column fixed='left' align='center' prop="num" label="序号" min-width="70">
      </el-table-column>
      <el-table-column align='center' prop="order_name" label="订单编号" min-width="150">
      </el-table-column>
      <el-table-column align='center' prop="student_name" label="学员" min-width="100">
      </el-table-column>
      <el-table-column align='center' prop="student_phone" label="学员电话" min-width="130">
      </el-table-column>
      <el-table-column align='center' prop="area_name" label="场地名称" min-width="120">
      </el-table-column>
      <el-table-column align='center' prop="address" label="地址" min-width="250">
      </el-table-column>
      <el-table-column align='center' prop="order_time" label="预约时间" min-width="170">
      </el-table-column>
      <el-table-column align='center' prop="coach_name" label="教练姓名" min-width="100">
      </el-table-column>
      <el-table-column align='center' prop="coach_phone" label="教练电话" min-width="130">
      </el-table-column>
      <el-table-column align='center' prop="paymoney" label="预付金额" min-width="100">
      </el-table-column>
      <el-table-column align='center' prop="paytype" label="支付方式" min-width="100">
      </el-table-column>
      <el-table-column fixed="right" align='center' prop="status" label="状态" min-width="100">
        <template scope="scope">
          <el-button @click="order_test" type="text" size="small">待接单</el-button><br>
          <el-tooltip placement="top">
            <div slot="content">取消日期:2012-3-23 12:34<br/>罚款金额:50元</div>
            <el-button @click="pass_test" type="text" size="small">
              已取消
            </el-button>
          </el-tooltip><br>
          <el-tooltip placement="top">
            <div slot="content">
              <el-rate v-model='value13' :colors="['#99A9BF', '#F7BA2A', '#FF9900']"> </el-rate>
            </div>
            <el-button @click="pass_test" type="text" size="small">
              完成
            </el-button>
          </el-tooltip>
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
      value13: null,
      input1: '',
      input2: '',
      options: [{
        value: '选项1',
        label: '待接单'
      }, {
        value: '选项2',
        label: '已取消'
      }, {
        value: '选项3',
        label: '待结算'
      }, {
        value: '选项4',
        label: '待评价'
      }, {
        value: '选项5',
        label: '完成'
      }],
      value: '',
      pickerOptions0: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7;
        }
      },
      // value4: new Date(2016, 9, 10, 18, 40),  //设置默认值
      value3: new Date(),
      value4: new Date(),
      value5: new Date(),
      value7: new Date(),
      value6: '',
      input1: '',
      tableData: [{
        num: '1',
        order_name: '0924356879',
        student_name: '薛宝钗',
        student_phone: '18609281234',
        area_name: '训练基地1',
        address: '陕西省西安市长安区XX街道',
        order_time: '2014-09-12 12:34',
        coach_name: '贾宝玉',
        coach_phone: '17233456758',
        paymoney: '50',
        paytype: '微信',
        status: '50',
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

.el-table--fit {
  margin-top: 20px;
}

.query .choose .el-select {
  width: 100px;
  margin-right: 20px;
}

.query .choose .el-button {
  margin-left: 25px;
}

.choose .el-input {
  width: 150px;
}

.el-date-editor.el-input {
  width: 120px;
}

.el-button+.el-button {
  margin-left: 0px;
}



/* 默认的样式 */

.el-row {
  margin-bottom: 20px;
}
</style>
