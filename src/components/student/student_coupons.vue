<template>
  <div id="hello">
    <!-- 学员卡券明细-->
    <div class="choose_button">
      <el-button size='mini' @click="backto"> 返 回
      </el-button>
    </div>
    <!-- 查询 -->
    <div class="query">
      <div class="account">
        <span>
          账号：18609271234
        </span>
        <span>
          姓名：薛宝钗
        </span>
      </div>
      <el-form action="">
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <div class="block">
              <span class="demonstration">使用日期:</span>
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
          <el-button @click="query" type="primary">查询</el-button>
        </div>

      </el-form>
    </div>
    <!-- 数据表格 -->
    <el-table :data="tableData" border style="width: 80%" :stripe='true'>
      <el-table-column align='center' prop="num" label="卡券编号" min-width="70">
      </el-table-column>
      <el-table-column align='center' prop="status" label="状态" min-width="70">
      </el-table-column>
      <el-table-column align='center' prop="date" label="使用时间" min-width="70">
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
  created: function() {
  },
  created() {
  },
  methods: {
    backto() {
      this.$router.go(-1);
    },
    query() {
      console.log('查询');
    }
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
        status: '未使用',
        date: '2017-08-23 13:14',
      }, {
        num: '18609281213',
        status: '已使用',
        date: '2017-08-23 13:14',
      }]
    }
  }
}
</script>

<style scoped>
/* 自定义的样式 */

.query {
  padding: 20px 0px 10px 0px;
  width: 900px;
}

#hello {
  margin: 20px 20px;
}

.el-button--primary {
  margin-left: 40px;
}

.query .account {
  border-bottom: 1px solid gray;
  margin-bottom: 20px;
  padding: 10px;
  font-size: 16px;
}

.query .account span {
  margin-right: 70px;
}

</style>
