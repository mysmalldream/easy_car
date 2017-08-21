<template>
  <div id="hello">
    <!-- 审核管理 -->
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
    <!-- 查询 -->
    <div class="query">
      <form action="">
        <label>账号:
          <input type="text"></input>
        </label>
        <label>姓名:
          <input type="text"></input>
        </label>
        <label>状态:
          <select>
            <option value="未审核">未审核</option>
            <option value="已审核">已审核</option>
            <option value="驳回">驳回</option>
          </select>
        </label>
        <label>审核人:
          <select id="">
            <option selected="" value="请选择">请选择</option>
            <option value="李主管">李主管</option>
          </select>
        </label>
        <label>申请目标:
          <select id="">
            <option value="请选择">请选择</option>
            <option selected="" value="辞职">辞职</option>
            <option value="代理人">代理人</option>
            <option value="代理商">代理商</option>
          </select>
        </label>
        <input type="button" value="查询"></input>
      </form>
    </div>

    <!-- 数据表格 -->
    <el-table :data="tableData" border style="width: 100%" :stripe='true'>
      <el-table-column align='center' prop="num" label="序号" min-width="70">
      </el-table-column>
      <el-table-column align='center' prop="name" label="姓名" min-width="80">
      </el-table-column>
      <el-table-column align='center' prop="account" label="账号" min-width="130">
      </el-table-column>
      <el-table-column align='center' prop="data" label="申请日期" min-width="120">
      </el-table-column>
      <el-table-column align='center' prop="target" label="申请目标" min-width="110">
      </el-table-column>
      <el-table-column align='center' prop="excuse" label="申请理由" min-width="100">
      </el-table-column>
      <el-table-column align='center' prop="datas" label="审核日期" min-width="100">
      </el-table-column>
      <el-table-column align='center' prop="person" label="审批人" min-width="100">
      </el-table-column>
      <el-table-column align='center' prop="status" label="状态" min-width="100">
      </el-table-column>
      <el-table-column align='center' prop="directive" label="操作" min-width="100">
        <template scope="scope">
          <el-button @click="handleClick" type="text" size="small">查看11</el-button>
          <el-button type="text" size="small">编辑22</el-button>
        </template>
      </el-table-column>

    </el-table>
    
  </div>
</template>

<script>
import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(Element)

export default {
  name: 'hello',
   methods: {
      handleClick() {
        console.log(1);
      }
    },
  data() {
    return {
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
      value7: '',
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
