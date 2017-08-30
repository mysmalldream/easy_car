<template>
  <div id="hello">
    <!-- 场地分配-->
    <el-row :gutter="20">
      <el-col :span="12" :offset="1">
        <div class="grid-content bg-purple">
          <el-select v-model="value" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12" :offset="1">
        <div class="grid-content bg-purple">
            <el-button @click="bind_unbind" type="primary" >绑定/解绑</el-button>
        </div>
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
      options: [{
        value: '选项1',
        label: '场地一'
      }, {
        value: '选项2',
        label: '场地二'
      }, {
        value: '选项3',
        label: '场地三'
      }],
      value: ''
    }
  },
  methods: {
    bind_unbind(){
      console.log("绑定和解绑按钮被点击了");
    }
  },

}
</script>

<style scoped>
/* 自定义样式 */

#hello {
  margin: 20px 20px;
}
.el-button--primary{
  width: 215px;
}
.bg-purple[data-v-355b95cc]{
  background-color: #fff;
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
