<template>
  <div id="hello">
    <!-- 其他费用-->
    <!-- 日期 -->
    <div class="query">
      <el-form action="">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="block">
              <span class="demonstration">时间:</span>
              <el-date-picker v-model="value6" type="daterange" placeholder="请选择时间日期范围">
              </el-date-picker>
            </div>
          </div>
        </el-col>

        <div class="choose">
          <label>来源:
            <el-select v-model="value" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </label>
        </div>

      </el-form>
    </div>
    <!-- 数据表格 -->
    <el-table :data="tableData" border style="width: 79%" :stripe='true'>
      <el-table-column align='center' prop="num" label="序号" min-width="30">
      </el-table-column>
      <el-table-column align='center' prop="date" label="时间" min-width="70">
      </el-table-column>
      <el-table-column align='center' prop="source" label="来源" min-width="70">
      </el-table-column>
      <el-table-column align='center' prop="fee" label="费用" min-width="70">
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
        label: '练车'
      }, {
        value: '选项2',
        label: '约考'
      }, {
        value: '选项3',
        label: '商城'
      }],
      value: '',
      tableData: [{
        num: '1',
        date: '2017-08-23 13:14',
        source: '约考',
        fee: '50',
      }, {
        num: '2',
        date: '2017-08-23 13:14',
        source: '约考',
        fee: '50',
      }]
    }
  }
}
</script>

<style scoped>
/* 自定义的样式 */

.query {
  padding: 0px 20px 10px 20px;
}


#hello {
  margin: 20px 20px;
}

</style>
