<template>
  <div id="hello">
    <!-- 学员卡券明细-->
    <!-- 查询 -->
    <div class="query">
      <el-form action="">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="block">
              <span class="demonstration">注册日期:</span>
              <el-date-picker v-model="value6" type="daterange" placeholder="请选择注册日期范围">
              </el-date-picker>
            </div>
          </div>
        </el-col>

        <div class="choose">
          <label>状态:
            <el-select v-model="value" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </label>
          <el-button type="primary">查询</el-button>
        </div>

      </el-form>
    </div>
    <!-- 数据表格 -->
    <el-table :data="tableData" border style="width: 79%" :stripe='true'>
      <el-table-column align='center' prop="num" label="卡券编号" min-width="70">
      </el-table-column>
      <el-table-column align='center' prop="name" label="状态" min-width="70">
      </el-table-column>
      <el-table-column align='center' prop="account" label="使用时间" min-width="70">
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
  created: function () {
    // this.$router.push('/activePublic');
    //  this.$router.push('/student_details')  //将你的跳转写在这里。
  },
  created() {
  },
  methods: {
  },
  data() {
    return {
      value6: '',
      input1: '',
      input2: '',
      options: [{
        value: '选项1',
        label: '已使用'
      }, {
        value: '选项2',
        label: '未使用'
      }, {
        value: '选项3',
        label: '已失效'
      }],
      value: '',
      tableData: [{
        num: '18609281213',
        name: '未使用',
        account: '2017-08-23 13:14',
      }, {
        num: '18609281213',
        name: '已使用',
        account: '2017-08-23 13:14',
      }]
    }
  }
}
</script>

<style scoped>
/* 自定义的样式 */

.query {
  padding: 40px 20px 30px 20px;
}

.el-input {
  width: 210px;
}

.block,
.bg-purple[data-v-55a5009d] {
  background-color: #fff;
}

#hello {
  margin: 0px 20px;
}
.el-button--primary{
 margin-left: 40px;
}
</style>
