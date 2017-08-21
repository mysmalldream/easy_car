<template>
  <div id="hello">
    <!-- 审核管理 -->
    <!-- 查询 -->
    <div class="query">
      <form action="">
        <el-row>
          <el-col :span="7">
            <div class="grid-content bg-purple">
              <div class="block">
                <span class="demonstration">申请日期:</span>
                <el-date-picker v-model="value6" type="daterange" placeholder="请选择申请日期范围">
                </el-date-picker>
              </div>
            </div>
          </el-col>
          <el-col :span="7">
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
          <label>账号:
            <input type="text">
          </label>
          <label>姓名:
            <input type="text">
          </label>
          <label>状态:
            <el-select v-model="value" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </label>
          <label>审核人:
            <el-select v-model="value1" placeholder="请选择">
              <el-option v-for="item in options1" :key="item.value1" :label="item.label" :value="item.value1">
              </el-option>
            </el-select>
          </label>
          <label>申请目标:
            <el-select v-model="value2" placeholder="请选择">
              <el-option v-for="item in options2" :key="item.value2" :label="item.label" :value="item.value2">
              </el-option>
            </el-select>
          </label>
          <el-button type="primary">查询</el-button>
        </div>

      </form>
    </div>

    <!-- 数据表格 -->
    <el-table :data="tableData" border style="width: 100%" :stripe='true'>
      <el-table-column align='center' prop="num" label="序号" min-width="50">
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
          <el-button @click="look" type="text" size="small">查看</el-button>
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
          <el-button  @click="refuse" type="text" size="small">驳回</el-button>
          <el-button  @click="excuse" type="text" size="small">查看理由</el-button>
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
    look() {
      console.log('查看');
    },
    pass() {
      console.log('通过');
    },
    refuse() {
      console.log('驳回');
    },
    excuse() {
      console.log('查看理由');
    },
  },
  data() {
    return {
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
      // value: '111',
      value6: '',
      value7: '',
      input1: '',
      tableData: [{
        num: '1',
        name: '王小虎',
        account: '18609281213',
        data: '2017-08-08',
        target: '代理人',
        excuse: '理由',
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

.bg-purple[data-v-677f443f],
.bg-purple-light[data-v-677f443f] {
  background: none;
}

#hello {
  margin: 0px 20px;
}

.el-table--fit {
  margin-top: 30px;
}

.query .el-row {
  width: 1010px !important;
}

.query .choose input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #bfcbd9;
  box-sizing: border-box;
  color: #1f2d3d;
  display: inline-block;
  font-size: inherit;
  height: 36px;
  line-height: 1;
  outline: none;
  padding: 3px 10px;
  margin: 0px 15px;
  transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
}

.query .choose .el-select {
  width: 100px;
}

.query .choose .el-button {
  margin-left: 25px;
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
