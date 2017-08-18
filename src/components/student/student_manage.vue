<template>
  <div id="hello">
    <!-- 审核管理111 -->
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
    <el-row>
      <el-col :span="4">
        <div class="grid-content bg-purple">1</div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-light">2</div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple">3</div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-light">4</div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple">5</div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-light">6</div>
      </el-col>
    </el-row>
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
      value7: ''
    };
  }
}
</script>
<style scoped>
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


/* 自定义的样式 */

.bg-purple[data-v-161e35eb] {
  background: none;
}

.bg-purple-light[data-v-161e35eb] {
  background: none;
}
</style>
