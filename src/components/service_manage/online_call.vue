<template>
  <div id="hello">
    <!-- 在线反馈 -->
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="学员端" name="first">
        <!-- 查询 -->
        <el-form action="" :inline="true">
          <el-row>
            <el-col :span="7">
              <div class="grid-content bg-purple">
                <div class="block">
                  <span class="demonstration">反馈时间:</span>
                  <el-date-picker v-model="value3" type="date" placeholder="反馈日期" :picker-options="pickerOptions0">
                  </el-date-picker> ---
                  <el-time-picker v-model="value4" :picker-options="{selectableRange: '00:00:00 - 23:00:00'}" placeholder="反馈时间">
                  </el-time-picker>
                </div>
              </div>
            </el-col>
            <label>状态:
              <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </label>
            <el-form-item label="账号:">
              <el-input type="text" v-model="input1" placeholder="请输入您的账号"></el-input>
            </el-form-item>
            <el-form-item label="姓名:">
              <el-input type="text" v-model="input2" placeholder="请输入您的姓名"></el-input>
            </el-form-item>
            <el-button @click='query_button' type="primary">查询</el-button>
          </el-row>
        </el-form>
        <!-- 表格 -->
        <el-table ref="multipleTable" :data="tableData3" border tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
          <el-table-column prop="num" align='center' label="序号" min-width="40" show-overflow-tooltip>
            <template scope="scope">{{ scope.row.num }}</template>
          </el-table-column>
          <el-table-column align='center' label="账号" min-width="90">
            <template scope="scope">{{ scope.row.account }}</template>
          </el-table-column>
          <el-table-column prop="name" align='center' label="姓名" min-width="50">
          </el-table-column>
          <el-table-column prop="content" inline-template align='center' label="内容" min-width="50" show-overflow-tooltip>
            <span>
              <el-button type="text" size="small" @click="setCurrent(row)">查看</el-button>
            </span>
          </el-table-column>
          <el-table-column prop="time" align='center' label="反馈时间" min-width="100" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="status" align='center' label="状态" min-width="50" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="scoper" align='center' label="处理人" min-width="50" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="remark" inline-template align='center' label="备注" min-width="50" show-overflow-tooltip>
            <span>
              <el-button type="text" size="small" @click="setCurrent(row)">查看</el-button>
            </span>
          </el-table-column>
          <el-table-column inline-template align='center' label="操作">
            <span>
              <el-button type="text" size="small" @click="setCurrent(row)">处理</el-button>
            </span>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="教练端" name="second">教练端</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(Element)

export default {
  name: 'hello',
  data() {
    return {
      textarea: '',    //备注框
      tableData3: [{
        num: '1',
        account: '18609281234',
        name: '葫芦娃',
        content: '查看',
        time: '2017-08-08 13：30',
        status: '已处理',
        scoper: '王主管',
        remark: '查看'
      }, {
        num: '2',
        account: '18609281234',
        name: '葫芦娃',
        content: '查看',
        time: '2017-08-08 13：30',
        status: '已处理',
        scoper: '王主管',
        remark: '查看'
      }],
      multipleSelection: [],
      pickerOptions0: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7;
        }
      },
      value3: new Date(),
      value4: new Date(),
      formInline: {
        user: '',
      },
      value1: '',
      input1: '',
      input2: '',
      value: '',
      // getuuid :'',
      activeName: 'first',
      options: [{
        value: '选项1',
        label: '未处理'
      }, {
        value: '选项2',
        label: '已处理'
      }],
      url: 'http://172.10.0.201/api/v1/accounts', //此处填写接口地址
      users: [],
      keywords: '',
      select: '',
      filter: {
        phone: '',
        per_page: 10, // 页大小
        page: 1, // 当前页
        sorts: ''
      },
      loading: true,
      selected: [],
      dialogUpdateVisible: false, //编辑对话框的显示状态
      createLoading: false,
      updateLoading: false,
      update: {
        name: '',
        phone: '',
        email: '',
        is_active: true
      },
      total_rows: 0,
      create: {
        id: '',
        username: '',
        name: '',
        is_active: true
      },
    };
  },

  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    query_button() {
      console.log('查询按钮被点击了');
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },

    ai_dialog_close() {
      this.dialogTableVisible = false;   //查看弹出框
    },

    setCurrent(user) {
      this.currentId = user.id;
      this.update.name = user.name;
      this.update.phone = user.phone;
      this.update.email = user.email;
      this.update.is_active = user.is_active;
      this.dialogUpdateVisible = true;
    },

  }
}
</script>
<style scoped>
/* 自定义的样式 */

#hello {
  margin: 55px 20px;
}

.el-input {
  width: 120px;
}

.el-select {
  width: 100px;
}

.el-row {
  margin-bottom: -10px;
}
</style>

