<template>
  <div id="hello">
    <!-- 教练个人详情页面 -->
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">状态：待审核</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">申请时间2017-08-08</div>
      </el-col>
      <el-col  :span="3">
        <div class="grid-content bg-purple">
          <el-button type="primary" @click="dialogFormVisible = true">审 核</el-button>
          <!-- 教练审核申请弹窗 -->
          <el-dialog title="教 练 申 请 审 核" :visible.sync="dialogFormVisible" :show-close=false :before-close="ai_dialog_close1" size='tiny' custom-class='dialog_top' top=20%>
            <div class="radio">
              <el-radio class="radio1" v-model="radio" label="1">通过</el-radio>
              <el-radio class="radio1" v-model="radio" label="2">驳回</el-radio>
            </div>
            <div class="refuse">
              <el-input resize=none type="textarea" :autosize="{ minRows: 12, maxRows: 6}" placeholder="请输入内容..." v-model="textarea">
              </el-input>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false ">确 定</el-button>
              </div>
            </div>
          </el-dialog>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-button @click="backto"> 返 回
          </el-button>
        </div>
      </el-col>
    </el-row>
    <ul class="student_details">
      <li v-for="(item,index) in lists" :key="item.id">
        {{item.account}}{{item.register_time}}{{item.grade}}{{item.name}}
        <span v-html="item.head"></span>{{item.area}}{{item.bank}} {{item.idcard}}
        <span v-html="item.front"></span>
        <span v-html="item.side"></span>
      </li>
    </ul>
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
      dialogFormVisible: false,     //审核弹出框
      radio: '1',                   //单选框
      textarea: '',                  //审核理由输入框
      lists: [{
        account: '账号：13002918015',
      }, {
        register_time: '注册时间：2017年8月8日',
      }, {
        grade: '身份等级：普通用户',
      }, {
        name: '姓名：薛宝钗',
      }, {
        head: '头像：<img src="../../../static/img/test.jpg"></img>',
      }, {
        area: '考场名称：xxx',
      }, {
        bank: '银行卡卡号：6217000000000000000000000000',
      }, {
        idcard: '身份证：610122199011111220',
      }, {
        front: '正：<img src="../../../static/img/card.png"></img>',
      }, {
        side: '反：<img src="../../../static/img/card.png"></img>',
      }],
    }
  },
  methods: {
    backto() {
      this.$router.go(-1);
    },
    ai_dialog_close1() {
      this.dialogFormVisible = false;   //审核弹出框
      // this.confirm ;
    },
  },

}
</script>

<style scoped>
/* 自定义样式 */

#hello {
  margin: 20px 20px;
  margin-top: 70px;
  width: 900px;
}

.student_details {
  padding: 0;
}

.student_details li {
  list-style: none;
  line-height: 25px;
  letter-spacing: 1px;
  font-size: 14px;
}

.bg-purple[data-v-734047d6] {
  background-color: #fff;
}

.dialog-footer {
  margin-top: 20px;
}

.refuse .dialog-footer .el-button--default {
  margin-right: 60px !important;
}

.refuse .dialog-footer .el-button--primary {
  margin-left: 60px;
}

.radio {
  margin-top: -15px;
  margin-bottom: 10px;
}

.radio .radio1 {
  margin-right: 60px;
}

.radio .radio1 {
  margin-left: 60px;
}



/* 默认的样式 */

/* .el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
  text-align: center;
  line-height: 200%;
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
} */
</style>
