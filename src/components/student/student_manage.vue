<template>
  <div id="hello">
    <!-- 审核管理 -->
    <!-- 查询 -->
    <div class="query">
      <el-form :inline="true" action="">
        <el-row>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <div class="block">
                <span class="demonstration">申请日期:</span>
                <el-date-picker v-model="value6" type="daterange" placeholder="请选择申请日期范围">
                </el-date-picker>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple-light">
              <div class="block">
                <span class="demonstration">审核日期:</span>
                <el-date-picker v-model="value7" type="daterange" placeholder="请选择审核日期范围">
                </el-date-picker>
              </div>
            </div>
          </el-col>
        </el-row>

        <div class="choose">
          <el-form-item label="账号">
            <el-input size="small2" placeholder="请输入您的账号" v-model="input1">
            </el-input>
          </el-form-item>
          <el-form-item label="姓名">
            <el-input size="small2" placeholder="请输入您的姓名" v-model="input2">
            </el-input>
          </el-form-item>
          <el-form-item label="状态">
            <el-select v-model="value" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="审核人">
            <el-select v-model="value1" placeholder="请选择">
              <el-option v-for="item in options1" :key="item.value1" :label="item.label" :value="item.value1">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="申请目标">
            <el-select v-model="value2" placeholder="请选择">
              <el-option v-for="item in options2" :key="item.value2" :label="item.label" :value="item.value2">
              </el-option>
            </el-select>
          </el-form-item>
          <el-button type="primary">查询</el-button>
        </div>

      </el-form>
    </div>
    <!-- 数据表格 -->
    <el-table :data="tableData" border style="width: 100%" :stripe='true'>
      <el-table-column align='center' prop="num" label="序号" min-width="60">
      </el-table-column>
      <el-table-column align='center' prop="name" label="姓名" min-width="80">
      </el-table-column>
      <el-table-column align='center' prop="account" label="账号" min-width="110">
      </el-table-column>
      <el-table-column align='center' prop="data" label="申请日期" min-width="110">
      </el-table-column>
      <el-table-column align='center' prop="target" label="申请目标" min-width="100">
      </el-table-column>
      <el-table-column align='center' prop="excuse" label="申请理由" min-width="100">
        <template scope="scope">

          <el-button type="text" @click="dialogTableVisible = true">查看</el-button>
          <!-- 申请代理人/代理商弹窗 -->
          <el-dialog title="申请代理人/代理商" :visible.sync="dialogTableVisible" :before-close="ai_dialog_close" size='tiny' top=7% custom-class='dialog_top'>
            <ul class="student_details">
              <li> 账号：13002918015</li>
              <li> 姓名：薛宝钗</li>
              <li> 电话：13002918015</li>
              <li> 银行卡卡号：6217000000000000000000000000</li>
              <li> 身份证：610122199011111220</li>
              <li> 正：<img src='../../../static/imgs/test.jpg'></img>
              </li>
              <li> 反：<img src='../../../static/imgs/test.jpg'></img>
              </li>
            </ul>
          </el-dialog>
          
        </template>
      </el-table-column>
      <el-table-column align='center' prop="datas" label="审核日期" min-width="100">
      </el-table-column>
      <el-table-column align='center' prop="person" label="审批人" min-width="100">
      </el-table-column>
      <el-table-column align='center' prop="status" label="状态" min-width="80">
      </el-table-column>
      <el-table-column align='center' prop="directive" label="操作" min-width="100">
        <template scope="scope">
          <el-button @click="pass" type="text" size="small">通过</el-button>

          <el-button type="text" @click="dialogFormVisible = true" size="small">驳回</el-button>

          <el-dialog title="驳 回 理 由" :visible.sync="dialogFormVisible" :before-close="ai_dialog_close1" size='tiny' custom-class='dialog_top' top=20%>
            <div class="refuse">
              <el-input resize=none type="textarea" :autosize="{ minRows: 12, maxRows: 6}" placeholder="请输入内容..." v-model="textarea">
              </el-input>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false ">确 定</el-button>
              </div>
            </div>
          </el-dialog>

          <el-button type="text" @click="excuse = true" size='small'>查看理由</el-button>
          <!-- 查看理由弹窗 -->
          <el-dialog title="查看理由" :visible.sync="excuse" custom-class='dialog_top' :before-close="ai_dialog_close2" size='tiny' top=20%>
            <span>测试数据查看理由 测试数据查看理由 测试数据查看理由 测试数据查看理由</span>
          </el-dialog>

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
    ai_dialog_close() {
      this.dialogTableVisible = false;   //查看弹出框
    },
    ai_dialog_close1() {
      this.dialogFormVisible = false;   //驳回弹出框
      // this.confirm ;
    },
    ai_dialog_close2() {
      this.excuse = false;   //查看理由弹出框
    },
    pass() {
      console.log('通过');
    },
  },
  data() {
    return {
      // confirm:false,
      textarea: '',     //驳回理由输入框
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      dialogTableVisible: false,     //查看弹出框
      dialogFormVisible: false,     //驳回弹出框
      excuse: false,                //查看理由弹出框
      options: [{
        value: '选项1',
        label: '未审核'
      }, {
        value: '选项2',
        label: '已审核'
      }, {
        value: '选项3',
        label: '驳回'
      }],
      value: '',
      options1: [{
        value1: '选项1',
        label: '李主管'
      }, {
        value1: '选项2',
        label: '王主管'
      }, {
        value1: '选项3',
        label: '待定占位'
      }],
      value1: '',
      options2: [{
        value2: '选项1',
        label: '辞职'
      }, {
        value2: '选项2',
        label: '代理人'
      }, {
        value2: '选项3',
        label: '代理商'
      }],
      value2: '',
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
        excuse: '理由1111',
        datas: '2017-08-10',
        person: '李主管',
        status: '通过',
        directive: '通过 返回 ',
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

.bg-purple[data-v-677f443f],
.bg-purple-light[data-v-677f443f] {
  background: none;
}

.query .choose .el-select {
  width: 100px;
  margin-right: 20px;
}

.el-input--small2 {
  width: 130px;
}

.student_details {
  padding: 0px;
}

.student_details li {
  list-style: none;
  line-height: 25px;
  letter-spacing: 1px;
  font-size: 14px;
  text-align: left;
}

.student_details li:nth-of-type(6)>img,
li:nth-of-type(7)>img {
  width: 240px;
  height: 151px;
  margin-left: 25px;
}

.refuse .dialog-footer {
  margin-top: 30px !important;
}

.refuse .dialog-footer .el-button--default {
  margin-right: 60px !important;
}

.refuse .dialog-footer .el-button--primary {
  margin-left: 60px;
}




/* 默认的样式 */

.el-row {
  margin-bottom: 20px;
}
</style>
