<template>
  <div id="hello">
    <!-- 系统消息列表 -->
    <!-- 查询 -->
    <div class="query">
      <el-form action="">
        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <div class="block">
                <span class="demonstration">发送时间:</span>
                <el-date-picker v-model="value3" type="date" placeholder="发送日期">
                </el-date-picker> ------
                <el-time-picker v-model="value4" :picker-options="{
                      selectableRange: '00:00:00 - 23:00:00'
                    }" placeholder="发送时间">
                </el-time-picker>
              </div>
            </div>
          </el-col>
        </el-row>

        <div class="choose">
          <label>标题:
            <el-input type="text" v-model="input1" placeholder="请输入您的姓名"></el-input>
          </label>
          <label>接收对象:
            <el-select v-model="value" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </label>
          <label>发送人:
            <el-input type="text" v-model="input2" placeholder="请输入您的电话"></el-input>
          </label>
          <el-button @click="onSubmit" type="primary">查询</el-button>
        </div>

      </el-form>
    </div>
    <!-- 数据表格 -->
    <el-table :data="tableData" border style="width: 100%" :stripe='true'>
      <el-table-column align='center' prop="num" label="序号" min-width="50">
      </el-table-column>
      <el-table-column align='center' prop="title" label="标题" min-width="200">
      </el-table-column>
      <el-table-column align='center' prop="content" label="内容" min-width="90">
        <template scope="scope">
          <el-button type="text" size="mini">查看</el-button>
        </template>
      </el-table-column>
      <el-table-column align='center' prop="receive" label="接收对象" min-width="100">
      </el-table-column>
      <el-table-column align='center' prop="sender" label="发送人" min-width="90">
      </el-table-column>
      <el-table-column align='center' prop="send_time" label="发送时间" min-width="100">
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
        label: '所有学员'
      }, {
        value: '选项2',
        label: '所有教练'
      }, {
        value: '选项3',
        label: 'VIP学员'
      }, {
        value: '选项4',
        label: '认证教练'
      }, {
        value: '选项5',
        label: '代理人'
      }, {
        value: '选项6',
        label: '代理商'
      }],
      value: '',
      value4: new Date(),
      value3: new Date(),
      value6: '',
      input1: '',
      tableData: [{
        num: '1',
        title: '标题要长长长长长长长长长长长长长',
        content: '查看',
        receive: '学员端所有用户',
        sender: '王主管',
        send_time: '2017-08-08 16：30',
      }]
    };
  }
}
</script>
<style scoped>
/* 自定义的样式 */

#hello {
  margin: 20px 20px;
}

/* .block,
.bg-purple[data-v-55a5009d] {
  background-color: #fff;
} */

.el-table--fit {
  margin-top: 20px;
}

/* .query .el-row {
  width: 1010px !important;
} */

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
