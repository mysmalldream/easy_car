<template>
  <div id="hello">
  
    <div class="login">
      <p>易学车后台管理系统</p>
      <el-row type="flex" class="row-bg" justify="space-around">
        <el-col :span="11">
          <div class="grid-content bg-purple-light">
  
            <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
  
              <el-form-item label=" 用 户 名 : " prop="name">
                <el-input type="text"  v-model="ruleForm2.name"  auto-complete="off"></el-input>
              </el-form-item>
  
              <el-form-item label=" 登 录 密  码: " prop="pass">
                <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
              </el-form-item>

              <el-form-item label=" 验 证 码 : " prop="verify" label-width='100px' >
                <el-input type="text"  v-model="ruleForm2.verify"  auto-complete="off"></el-input>
              </el-form-item>

              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
                <el-button @click="resetForm('ruleForm2')">重置</el-button>
              </el-form-item>
  
            </el-form>
  
          </div>
        </el-col>
      </el-row>
    </div>
  
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

    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } 
      // else {
      //   if (this.ruleForm2.checkPass !== '') {
      //     this.$refs.ruleForm2.validateField('checkPass');
      //   }
      //   callback();
      // }
    };
    // var validatePass2 = (rule, value, callback) => {
    //   if (value === '') {
    //     callback(new Error('请再次输入密码'));
    //   } else if (value !== this.ruleForm2.pass) {
    //     callback(new Error('两次输入密码不一致!'));
    //   } else {
    //     callback();
    //   }
    // };
    return {
      ruleForm2: {
        pass: '',
        name: '',
        verify:''
      },
      rules2: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        // name: [
        //   { required: true, message: '请输入您的用户名', trigger: 'blur' },
        //   { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        // ],
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>
<style scoped>
/* 自定义的样式 */

.login{
  background-color:#999999;
  
}
.login p {
  text-align: center;
  font-size: 35px;
  letter-spacing: 5px;
  background-color:#999;
  margin-top: 0px;
  padding-top: 30px;
  color:#fff;
}

.row-bg[data-v-a0f63352] {
  height: 540px;
}
.el-input{
  width: 400px;
}
.el-col[data-v-a0f63352]{
  margin-top:100px;
}
.bg-purple-light[data-v-a0f63352]{
  background-color: #F9FAFC !important;
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

