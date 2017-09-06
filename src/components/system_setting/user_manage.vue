<template>
  <div id="hello">
    <!-- 用户管理 -->
    <!-- 查询 -->
    <el-form action="" :inline="true">
      <el-row>
        <el-col :span="7">
          <div class="grid-content bg-purple">
            <div class="block">
              <span class="demonstration">登录时间:</span>
              <el-date-picker v-model="value3" type="date" placeholder="登录日期" :picker-options="pickerOptions0">
              </el-date-picker> ---
              <el-time-picker v-model="value4" :picker-options="{selectableRange: '00:00:00 - 23:00:00'}" placeholder="登录时间">
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
    <!-- 新增按钮 -->
    <el-row :gutter="20">
      <el-col :span="2" :offset="22">
        <el-button type="primary" size='small' icon="edit" @click="dialogFormVisible = true">新增</el-button>
      </el-col>
    </el-row>
    <!-- 新增/修改弹窗-->
    <el-dialog title="新增/修改" :visible.sync="dialogFormVisible" :show-close=true :before-close="ai_dialog_close1" size='tiny' custom-class='dialog_top'>
      <div class="refuse">
        <el-form :model="form" ref="form" :rules="rules1">
          <el-form-item label="账 号 :" prop="account" :rules="[
                    { required: true, message: '账号不能为空'},
                  ]" :label-width="formLabelWidth">
            <el-input v-model="form.account" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="姓名 :" prop="name" :rules="[
                    { required: true, message: '姓名不能为空'},
                  ]" :label-width="formLabelWidth">
            <el-input v-model="form.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码 :" prop="pass" :label-width="formLabelWidth">
            <el-input v-model="form.pass" type="password" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="再次确认 :" prop="checkPass" :label-width="formLabelWidth">
            <el-input v-model="form.checkPass" type="password" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="备注 :" :label-width="formLabelWidth">
            <el-input resize=none type="textarea" :autosize="{ minRows:4, maxRows:6}" placeholder="请输入备注的内容..." v-model="textarea">
            </el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer" custom-class="aaa">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitForm('form')">添加</el-button>
        </div>
      </div>
    </el-dialog>
    <!-- 表格 -->
    <el-table ref="multipleTable" :data="tableData3" border tooltip-effect="dark" style="width: 100%">
      <el-table-column prop="account" align='center' label="账号" min-width="80" show-overflow-tooltip>
        <template scope="scope">{{ scope.row.account }}</template>
      </el-table-column>
      <el-table-column prop="name" align='center' label="姓名" min-width="40">
        <template scope="scope">{{ scope.row.name }}</template>
      </el-table-column>
      <el-table-column prop="last_time" align='center' label="上次登陆时间" min-width="100">
      </el-table-column>
      <el-table-column prop="status" align='center' label="状态" min-width="50" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="remark" align='center' label="备注" min-width="100" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="opearate" align='center' label="操作" min-width="150" show-overflow-tooltip>
        <template scope="scope">
          <el-button type="text" size="small">停用</el-button>
          <el-button type="text" size="small">修改</el-button>
          <el-button type="text" size="small">删除</el-button>
          <el-button type="text" size="small">权限分配</el-button>
          <el-button type="text" size="small" @click="passReset">密码重置</el-button>
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
  data() {
    var validatePass = (rule, value, callback) => {  //校验密码1
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.form.checkPass !== '') {
          this.$refs.form.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {   //校验密码2
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.form.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      textarea: '',    //备注框
      dialogFormVisible: false,
      pswreset: false,
      formLabelWidth: '78px',
      pickerOptions0: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7;
        }
      },
      tableData3: [{
        account: '18609281234',
        name: '葫芦娃',
        last_time: '2017-08-08 16：30',
        status: '正常',
        remark: '',
        opearate: '',
      }, {
        account: '',
        name: '',
        last_time: '',
        status: '停用',
        remark: '离职员工',
        opearate: '',
      }],
      rules1: {           //校验密码的规则
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
      },
      form: {
        account: '',
        name: '',
        oldPass: '',
        pass: '',
        checkPass: '',
      },
      value3: new Date(),
      value4: new Date(),
      value1: '',
      input1: '',
      input2: '',
      value: '',
      // getuuid :'',
      options: [{
        value: '选项1',
        label: '正常'
      }, {
        value: '选项2',
        label: '停用'
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
    query_button() {
      console.log('查询按钮被点击了');
    },
    ai_dialog_close1() {
      this.dialogFormVisible = false;   //新增修改弹出框
    },
    ai_dialog_close2() {
      this.pswreset = false;   //重置密码弹出框
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('添加成功');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    setCurrent(user) {
      this.currentId = user.id;
      this.update.name = user.name;
      this.update.phone = user.phone;
      this.update.is_active = user.is_active;
      this.dialogUpdateVisible = true;
    },
    passReset() {        //密码重置
      this.$router.push('/psw_reset')
    }
  }
}
</script>
<style scoped>
/* 自定义的样式 */

#hello {
  margin: 70px 20px;
}

.el-input {
  width: 120px;
}

.el-select {
  width: 100px;
}

.choose .el-input {
  width: 150px;
}

.el-form {
  margin-bottom: -40px;
}

.choose {
  margin-bottom: 0px;
}

.query .choose .el-button {
  margin-left: 25px;
}

.el-row {
  margin-bottom: 5px;
}

.refuse {
  padding-right: 25px;
}

.refuse .dialog-footer {
  margin-top: 30px !important;
}

.refuse .dialog-footer .el-button--default {
  margin-left: 50px !important;
}

.refuse .dialog-footer .el-button--primary {
  margin-left: 150px;
}
</style>

